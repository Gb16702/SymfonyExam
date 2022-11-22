<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Voitures;
use App\Form\VoituresType;
use App\Entity\ImagesVoitures;
use App\Repository\UserRepository;
use App\Repository\VoituresRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use MercurySeries\FlashyBundle\FlashyNotifier;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

// #[Route('/voitures')]
class VoituresController extends AbstractController
{
    // #[Route('/', name: 'app_voitures_index', methods: ['GET'])]
    // public function index(VoituresRepository $voituresRepository): Response
    // {
    //     return $this->render('voitures/index.html.twig', [
    //         'voitures' => $voituresRepository->findAll(),
    //     ]);
    // }

    //! le crud créé en faisant bin/console make:crud afin de pouvoir ajouter, supprimer ou éditer une voiture (si admin ou propriétaire de l'annonce)
    #[Route('/marques/{slug}', name: 'app_detail_voiture')]
    public function index(): Response
    {
        return $this->render('detail_voiture/index.html.twig', [
            'controller_name' => 'DetailVoitureController',
        ]);
    }
    //! La route vers new pour la création de la nouelle voiture
    #[Route('/new/{slug}', name: 'app_voitures_new', methods: ['GET', 'POST'])]
    public function new(Request $request, VoituresRepository $voituresRepository, UserRepository $userRepo, User $user, FlashyNotifier $flashy, EntityManagerInterface $manager): Response
    {
        $voiture = new Voitures();
        $form = $this->createForm(VoituresType::class, $voiture);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $images = $form->get('images')->getData();
            foreach($images as $image){
                $file = md5(uniqid()) . '.' .$image->guessExtension();
                $image->move(
                    $this->getParameter('imagePath'),
                    $file
                );

                $img = new ImagesVoitures();
                $img->setImageName($file);
                $voiture->addImagesVoiture($img);
            }
            $voiture->setUser($this->getUser());
            $voituresRepository->save($voiture, true);

            $manager -> persist($voiture);
            $manager -> flush();

            //! getNom est une méthode permettant de récupérer le nom de la voiture grâce au getter dans mon entité
            $flashy->success(  "La voiture {$voiture->getNom()} a bien été ajoutée");



            return $this->redirectToRoute('app_user', [
                'slug' => $user -> getSlug()
            ], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('voitures/new.html.twig', [
            'voiture' => $voiture,
            'form' => $form,
            'user' => $user
        ]);
    }


    #[Route('/{id}', name: 'app_voitures_show', methods: ['GET'])]
    public function show(Voitures $voiture): Response
    {
        return $this->render('voitures/show.html.twig', [
            'voiture' => $voiture,
        ]);
    }
    //! permet de modifier une voiture
    #[Route('/myProfile/{id}/edit', name: 'app_voitures_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Voitures $voiture, VoituresRepository $voituresRepository, FlashyNotifier $flashy, EntityManagerInterface $manager): Response
    {
        $form = $this->createForm(VoituresType::class, $voiture);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $voituresRepository->save($voiture, true);

            $manager -> persist($voiture);
            $manager -> flush();

            $flashy->success(  "La voiture {$voiture->getNom()} a bien été modifiée");


            return $this->redirectToRoute('app_brands', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('voitures/edit.html.twig', [
            'voiture' => $voiture,
            'form' => $form,
        ]);
    }
    //! permet de supprimer une voiture
    #[Route('/{id}', name: 'app_voitures_delete', methods: ['POST'])]
    public function delete(Request $request, Voitures $voiture, VoituresRepository $voituresRepository, FlashyNotifier $flashy): Response
    {

        if ($this->isCsrfTokenValid('delete'.$voiture->getId(), $request->request->get('_token'))) {
            $voituresRepository->remove($voiture, true);
        }
        $flashy->warning(  "La voiture {$voiture->getNom()} a bien été supprimée");
        return $this->redirectToRoute('home', [], Response::HTTP_SEE_OTHER);

        //! http see other -> réponse 303 qui me rediriger vers ma route home après suppression d'une voiture
    }
}
