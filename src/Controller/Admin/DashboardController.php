<?php

namespace App\Controller\Admin;

use App\Entity\Marques;
use App\Entity\Voitures;
use App\Entity\ImagesVoitures;
use App\Entity\Partials;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;

class DashboardController extends AbstractDashboardController
{
    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {
        return $this->render('admin/dashboard/index.html.twig');
        return parent::index();

        // Option 3. You can render some custom template to display a proper dashboard with widgets, etc.
        // (tip: it's easier if your template extends from @EasyAdmin/page/content.html.twig)
        //
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('SymfonyApp');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');
        yield MenuItem::linkToCrud('Add cars', "fa-solid fa-car", Voitures::class);
        yield MenuItem::linkToCrud('Add brands', "fa-solid fa-layer-group", Marques::class);
        yield MenuItem::linkToCrud('Add pictures', "fa-solid fa-image-portrait", ImagesVoitures::class);
        yield MenuItem::linkToCrud('Add partials', "fa-solid fa-file-export", Partials::class);
        yield MenuItem::linktoRoute('Back to the website', 'fa-solid fa-rotate-left', 'home.index',);
    }
}
