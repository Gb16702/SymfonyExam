<?php

namespace App\Controller\Admin;

use App\Entity\Partials;
use Vich\UploaderBundle\Form\Type\VichImageType;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class PartialsCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Partials::class;
    }


    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('section'),
            TextField::new('imageFile')->setFormType(VichImageType::class)->onlyOnForms(),
            ImageField::new('imageName')->setBasePath('/images/partials')->onlyOnIndex(),
        ];
    }

}
