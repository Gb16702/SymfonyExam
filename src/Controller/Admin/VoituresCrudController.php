<?php

namespace App\Controller\Admin;

use App\Entity\Voitures;
use App\Entity\ImagesVoitures;
use App\Form\ImagesVoituresType;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use PhpParser\Node\Stmt\Label;
use Vich\UploaderBundle\Form\Type\VichImageType;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\SlugField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class VoituresCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Voitures::class;
    }

//!crud voitures
    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('nom'),
            TextField::new('titre'),
            TextEditorField::new('description'),
            ChoiceField::new("carburant")->setChoices([
                'Essence' => 'Essence',
                'Diesel' => 'Diesel',
                'Electrique' => 'Electrique',
            ]),
            ChoiceField::new("cylinder")->setChoices([
                '1 litre' => '1',
                '2 litres' => '2',
                '3 litres' => '3',
            ]),
            ChoiceField::new("cylinder")->setChoices([
               'Avant' => 'Avant',
               'Arrière' => "Arrière"
            ]),
            IntegerField::new('owner'),
            IntegerField::new('puissance'),
            IntegerField::new('km'),
            IntegerField::new('prix'),
            DateTimeField::new('Year')->setFormat('yyyy.MM.dd G')
            ->setLabel('Date de mise en circulation'),
            AssociationField::new('marque')
            ->setFormTypeOptions((['by_reference' => true])),

            CollectionField::new('ImagesVoitures')->
            setEntryType(ImagesVoituresType::class)
            -> onlyOnForms(),
            SlugField:: new ('slug') ->setTargetFieldName('nom'),

        ];
    }

}
