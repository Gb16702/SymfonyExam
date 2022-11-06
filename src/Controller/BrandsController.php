<?php

namespace App\Controller;

use App\Repository\MarquesRepository;
use App\Repository\VoituresRepository;
use App\Repository\ImagesVoituresRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BrandsController extends AbstractController
{
    #[Route('/marques', name: 'app_brands', methods: ['GET'])]
    public function index(MarquesRepository $marque, Request $request, PaginatorInterface $paginatorInterface): Response
    {
        // $dql = "SELECT m :"

        // $marque = $paginatorInterface->paginate(
        //     $request->query->getInt('page', 1),
        //     limit: 4
        // );


        return $this->render('brands/brands.html.twig', [ "marqueCard" => $marque->findAll() ]);
    }

    #[Route('/marques/{slug}', name: 'app_showRoom')]

    public function voituresShowRoom( MarquesRepository $marque): Response
     {

        return $this -> render ('voitureShowRoom.html.twig', [
            "marqueCard" => $marque->findAll(),
        ]);
     }
}
