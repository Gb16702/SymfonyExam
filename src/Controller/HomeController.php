<?php

namespace App\Controller;

use App\Repository\MarquesRepository;
use App\Repository\PartialsRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController {
    #[Route('/', 'home.index', methods: ['GET'])]
    public function index(MarquesRepository $marque, PartialsRepository $partials): Response {
        return $this->render('home.html.twig', [
            "marques" => $marque->findAll(),
            "marqueBg" =>$marque->find(6),
             "header" => $partials->findOneBy([
                 "section" => "header"
             ]),
             "Logo" => $partials->findOneBy([
                "section" => "Logo"
            ]),
        ]);
    }
    // public function footer(MarquesRepository $footer): Response {
    //     return $this->render('home.html.twig', [
    //         "footer" => $footer->find(1),
    //     ]);
    // }
}
