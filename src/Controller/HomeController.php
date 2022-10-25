<?php

namespace App\Controller;

use App\Repository\MarquesRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController {
    #[Route('/', 'home.index', methods: ['GET'])]
    public function index(MarquesRepository $marque): Response {
        return $this->render('home.html.twig', [
            "marques" => $marque->findAll(),
            "marqueBg" =>$marque->find(3)
        ]);
    }
}
