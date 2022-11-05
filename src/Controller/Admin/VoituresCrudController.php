<?php

namespace App\Controller\Admin;

use App\Entity\Voitures;
use App\Entity\ImagesVoitures;
use App\Form\ImagesVoituresType;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use Vich\UploaderBundle\Form\Type\VichImageType;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField; 
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class VoituresCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Voitures::class;
    }


    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('nom'),
            // TextEditorField::new('description'),
            MoneyField::new('prix') -> setCurrency("EUR"),
            IntegerField::new('km'),
            AssociationField::new('marque')
            ->setFormTypeOptions((['by_reference' => true])),

            CollectionField::new('ImagesVoitures')->
            setEntryType(ImagesVoituresType::class)
            -> onlyOnForms(),

        ];
    }

}
