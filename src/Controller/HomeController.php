<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\MarquesRepository;
use App\Repository\PartialsRepository;
use App\Repository\UserRepository;
use App\Repository\VoituresRepository;
use App\Repository\ImagesVoituresRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

//! création home page
class HomeController extends AbstractController {
    #[Route('/home', 'home', methods: ['GET'])]
    public function index(MarquesRepository $marque, PartialsRepository $partials, VoituresRepository $voitures, ImagesVoituresRepository $imagesVoitures): Response {
        return $this->render('home.html.twig', [
            // "marques" => $marque->findAll(),
            // "marqueBg" =>$marque->find(6),
            "voitures" => $voitures ->findBy([], $orderBy = [
                "id" => "DESC"
            ],
             $limit = 4),
            "imagesVoitures" => $imagesVoitures->findBy([], $orderBy = null, $limit = 4),
             "header" => $partials->findOneBy([
                 "section" => "header"
             ]),
             "Logo" => $partials->findOneBy([
                "section" => "Logo"
            ]),
        ]);
    }

    // ! page membres
    #[Route('/membres', 'membres', methods: ['GET'])]
    public function list(UserRepository $user): Response {
        return $this -> render('userList.html.twig', [
            'users' => $user -> findAll()
        ]);
    }

    // public function list()
    // public function footer(MarquesRepository $footer): Response {
    //     return $this->render('home.html.twig', [
    //         "footer" => $footer->find(1),
    //     ]);
    // }
}
