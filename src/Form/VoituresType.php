<?php

namespace App\Form;

use App\Entity\Marque;
use App\Entity\Voitures;
use Symfony\Component\Form\AbstractType;
use phpDocumentor\Reflection\Types\Integer;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use App\Form\DataTransformer\FrenchToDateTimeTransformer;



class VoituresType extends AbstractType
{
    private $transformer;

    public function __construct(FrenchToDateTimeTransformer $transformer)
    {
        $this->transformer = $transformer;
    }
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom', TextType::class, [
                "attr" => [
                    'class' => 'form-control',
                    'placeholder' => 'Le nom du modèle de la voiture'
                ],
                "label" => "Nom *"
                ])
            ->add('prix', IntegerType::class, [
               'attr' => [
                    "class" => "form-control",
                    'placeholder' => 'Le prix de la voiture'
               ],
               "label" => "Prix *"
            ])
            ->add('km', IntegerType::class, [
                'attr' => [
                    'class' => "form-control",
                    'placeholder' => 'Le kilométrage de la voiture'
                ],
                'label' => 'Kilométrage *',
            ])
            ->add('Titre', TextType::class, [
                "attr" => [
                    'class' => 'form-control',
                    'placeholder' => 'Le titre de la voiture'
                ],
                'required' => false
            ])
            ->add('description', TextareaType::class, [
                "attr" => [
                    'class' => 'form-control',
                    'placeholder' => 'Une description de la voiture',
                ],
                'required' => false
            ])
            ->add('carburant', ChoiceType::class, [
                'choices' => [
                    'Essence' => 'Essence',
                    'Diesel' => 'Diesel',
                    'Electrique' => "Electrique",
                ],
                "attr" => [
                    'class' => 'form-control'
                ],
                'label' => 'Carburant *'
            ])
            ->add('puissance', IntegerType::class, [
                "attr" => [
                    'class' => 'form-control',
                    "Placeholder" => "100"
                ],
                "label" => "Puissance *"
            ])
            ->add('cylinder', choiceType::class, [
                'choices' => [
                    '1 litre' =>'1',
                    '2 litres' => '2',
                    '4 litres' => '4',
                ],
                "attr" => [
                    'class' => 'form-control',
                ],
                "label" => "Cylindrée *"
            ])
            ->add('Year', TextType::class, [
                "attr" => [
                    'class' => 'form-control'
                ],
                'label' => 'Date de mise en circulation *'
            ])
            ->add('transmission', ChoiceType::class, [
                'choices' => [
                    'Avant' =>'Avant',
                    'Arrière' => 'Arrière',
                ],
                "attr" => [
                    'class' => 'form-control',
                ],
                "label" => "Transmission *"
            ])
            ->add('owner', IntegerType::class, [
                "attr" => [
                    'class' => 'form-control',
                    "Placeholder" => "0"
                ],
                "label" => "Nombre de propriétaires *"
            ])
            ->add('marque', EntityType::class, [
                'class' => Marque::class,
                'attr' => [
                    'class' => 'form-control',
                    'id' => 'inputMarque'
                ],
                'label' => "Marque *"
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
        $builder->get('Year')->addModelTransformer($this->transformer);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Voitures::class,

        ]);
    }
}
