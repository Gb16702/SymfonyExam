<?php

namespace App\Controller;

use App\Entity\Voitures;
use App\Form\VoituresType;
use App\Repository\VoituresRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

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
    #[Route('/marques/{slug}', name: 'app_detail_voiture')]
    public function index(): Response
    {
        return $this->render('detail_voiture/index.html.twig', [
            'controller_name' => 'DetailVoitureController',
        ]);
    }

    #[Route('/new', name: 'app_voitures_new', methods: ['GET', 'POST'])]
    public function new(Request $request, VoituresRepository $voituresRepository): Response
    {
        $voiture = new Voitures();
        $form = $this->createForm(VoituresType::class, $voiture);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $voituresRepository->save($voiture, true);

            return $this->redirectToRoute('app_voitures_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('voitures/new.html.twig', [
            'voiture' => $voiture,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_voitures_show', methods: ['GET'])]
    public function show(Voitures $voiture): Response
    {
        return $this->render('voitures/show.html.twig', [
            'voiture' => $voiture,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_voitures_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Voitures $voiture, VoituresRepository $voituresRepository): Response
    {
        $form = $this->createForm(VoituresType::class, $voiture);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $voituresRepository->save($voiture, true);

            return $this->redirectToRoute('app_voitures_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('voitures/edit.html.twig', [
            'voiture' => $voiture,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_voitures_delete', methods: ['POST'])]
    public function delete(Request $request, Voitures $voiture, VoituresRepository $voituresRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$voiture->getId(), $request->request->get('_token'))) {
            $voituresRepository->remove($voiture, true);
        }

        return $this->redirectToRoute('app_voitures_index', [], Response::HTTP_SEE_OTHER);
    }
}
