<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType as TypeTextType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('username', TypeTextType::class, [
                'attr' => [
                    "class" => "label"
                ],
                "label" => "Nom d'utilisateur",
                'constraints' => [
                    new Length([
                        'min' => 5,
                        'minMessage' => "Votre nom d'utilisateur doit contenir plus de 5 caractères",
                        'max' => 20,
                        'maxMessage' => "Votre nom d'utilisateur ne peut pas être plus long que 20 caractères"
                    ]),
                    new NotBlank([
                        'message' => "Le nom d'utilisateur ne peut pas être vide"
                    ])
                ]
            ])
            ->add('agreeTerms', CheckboxType::class, [
                "attr" => [
                    "onclick" => "clicked()",
                ],
                'mapped' => false,
                "label" => "Accepter les conditions",
                'constraints' => [
                    new IsTrue([
                        'message' => 'Vous devez accepter nos conditions',
                    ]),
                ],
            ])
            ->add('plainPassword', PasswordType::class, [
                // instead of being set onto the object directly,
                // this is read and encoded in the controller
                'mapped' => false,
                'attr' => [
                    'autocomplete' => 'new-password',
                    "class" => "label",
                ],
                "label" => "Mot de passe",
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez entrer un mot de passe',
                    ]),
                    new Length([
                        'min' => 5,
                        'minMessage' => 'Votre mot de passe doit contenir au moins {{ limit }} caractères',
                        // max length allowed by Symfony for security reasons
                        'max' => 20,
                        'maxMessage' => 'Votre mot de passe ne peut pas contenir plus de {{ limit }} caractères'
                    ]),
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
