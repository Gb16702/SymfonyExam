<?php

namespace App\Form;

use App\Entity\Marque;
use App\Entity\Voitures;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class VoituresType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom', TextType::class, [
                "attr" => [
                    'class' => 'form-control'
                ],
                ])
            ->add('prix', IntegerType::class, [
               'attr' => [
                    "class" => "form-control"
               ],
            ])
            ->add('km', IntegerType::class, [
                'attr' => [
                    'class' => "form-control"
                ],
            ])
            ->add('Titre', TextType::class, [
                "attr" => [
                    'class' => 'form-control'
                ],
            ])
            ->add('description', TextareaType::class, [
                "attr" => [
                    'class' => 'form-control'
                ],
            ])
            ->add('carburant', TextType::class, [
                "attr" => [
                    'class' => 'form-control'
                ],
            ])
            ->add('marque', EntityType::class, [
                'class' => Marque::class,
                'attr' => [
                    'class' => 'form-control',
                    'id' => 'inputMarque'
                ],
            ])
            ->add('images', FileType::class, [

                'attr' => [
                    'class' => 'form-control'
                ],
                "label" => false,
                "multiple" => true,
                "required" => false,
                "mapped" => false,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Voitures::class,
        ]);
    }
}
