<?php

namespace App\Controller;

use App\Entity\Marque;
use App\Entity\Voitures;
use App\Repository\MarquesRepository;
use App\Repository\VoituresRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use App\Repository\ImagesVoituresRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BrandsController extends AbstractController
{
    #[Route('/marques', name: 'app_brands', methods: ['GET'])]
    public function index(MarquesRepository $marque, Request $request, PaginatorInterface $paginatorInterface): Response
    {
        return $this->render('brands/brands.html.twig', [
            'marqueCard' => $marque->paginate($request->query->getInt("page", 1))
        ]);
    }

    #[Route('/marques/{slug}', name: 'app_showRoom')]

    public function voituresShowRoom(EntityManagerInterface $em, PaginatorInterface $paginator, VoituresRepository $voiture, Marque $marques, Request $request, PaginatorInterface $paginatorInterface, MarquesRepository $marque): Response
     {
        // $dql   = "SELECT v FROM VoituresRepository:Voitures v";
        // $query = $em->createQuery($dql);


        // $pagination = $paginator->paginate(
        //     $query,
        //     $request->query->getInt('page', 1), 10
        //  );
        return $this -> render('voitureShowRoom.html.twig', [
            "marques" => $marques
            // "marqueCard" => $pagination
            // "marqueCard" => $voiture->paginateCar($request->query->getInt("page", 1))
        ]);
     }
     #[Route('/cars/{slug}', name: 'app_cars', methods: ['GET'])]

     public function carsDetails(Voitures $voiture): Response
     {
        return $this -> render('voitureInfo.html.twig', [
            "voiture" => $voiture
        ]);
     }

}



