<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Marque;
use App\Entity\Voitures;
use App\Form\UserType;
use App\Repository\MarquesRepository;
use App\Repository\VoituresRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

class UserController extends AbstractController
{
    #[Route('/myProfile/{slug}', name: 'app_user')]
     public function index(User $user, MarquesRepository $marqueRepo, Request $request, VoituresRepository $voiture): Response
     {
         $form = $this->createForm(UserType::class, $user);
         $form->handleRequest($request);
         return $this->render('user/index.html.twig', [
             "user" => $user,
            //  "marque" => $marqueRepo -> findAll()
            "voitures" => $voiture -> findAll()
         ]);
     }

    #[Route("/myProfile/{slug}/image", name:"user_imgEdit")]
    #[IsGranted("ROLE_USER")]

    public function imgModify(Request $request, EntityManagerInterface $manager, User $user): Response {
        $user = $this->getUser();
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid())
        {
            // supprimer l'image dans le dossier

            if(!empty($user->getPicture()))
            {
                unlink($this->getParameter('ppPath').'/'.$user->getPicture());
            }

            $file = $form['picture']->getData();
            if(!empty($file))
            {
                $originalFilename = pathinfo($file->getClientOriginalName(),PATHINFO_FILENAME);
                $safeFilename = transliterator_transliterate('Any-Latin;Latin-ASCII; [^A-Za-z0-9_] remove; Lower()', $originalFilename);
                $newFilename = $safeFilename."-".uniqid().".".$file->guessExtension();
                try{
                    $file->move(
                        $this->getParameter('ppPath'),
                        $newFilename
                    );
                }catch(FileException $e)
                {
                    return $e->getMessage();
                }
                $user->setPicture($newFilename);
            }

            $manager->persist($user);
            $manager->flush();

            // $this->addFlash(
            //     'success',
            //     'Votre avatar a bien été modifié'
            // );
            return $this->redirectToRoute('app_home');

        }
        return $this->render("user/_imgModify.html.twig",[
            'myform' => $form->createView(),
            "user" => $user
        ]);
    }
    }
