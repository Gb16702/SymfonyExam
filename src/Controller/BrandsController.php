<?php

namespace App\Controller;

use App\Repository\MarquesRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BrandsController extends AbstractController
{
    #[Route('/marques', name: 'app_brands')]
    public function index(MarquesRepository $marque): Response
    {
        return $this->render('brands/brands.html.twig', [
            "marqueCard" => $marque->findAll(),
        ]);
    }
}
