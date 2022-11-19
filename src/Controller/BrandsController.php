<?php

namespace App\Controller;

use App\Entity\Marque;
use App\Entity\User;
use App\Entity\Voitures;
use App\Repository\MarquesRepository;
use App\Repository\UserRepository;
use App\Repository\VoituresRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use App\Repository\ImagesVoituresRepository;
use MercurySeries\FlashyBundle\FlashyNotifier;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BrandsController extends AbstractController
{
    #[Route('/marques', name: 'app_brands', methods: ['GET'])]
    public function index(MarquesRepository $marque, Request $request, PaginatorInterface $paginatorInterface, FlashyNotifier $flashy): Response
    {
        return $this->render('brands/brands.html.twig', [
            'marqueCard' => $marque->paginate($request->query->getInt("page",1))
        ]);
    }

    #[Route('/marques/{slug}', name: 'app_showRoom')]

    public function voituresShowRoom(EntityManagerInterface $em, PaginatorInterface $paginator, MarquesRepository $marqueRepo, VoituresRepository $repository, Marque $marques, Request $request, PaginatorInterface $paginatorInterface, MarquesRepository $marque, UserRepository $userRepository, $slug): Response
     {
        // $dql   = "SELECT v FROM VoituresRepository:Voitures v";
        // $query = $em->createQuery($dql);


        // $pagination = $paginator->paginate(
        // $marqueRepo->findBy([$marques], $orderBy = NULL  ),
        //     $request->query->getInt('page', 1),
        //     6
        // );
        return $this->render('voitureShowRoom.html.twig', [
            "marques" => $marques,
            // 'user' => $user
            'user' => $userRepository -> findBy([
            "slug" => $slug
            ])
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



