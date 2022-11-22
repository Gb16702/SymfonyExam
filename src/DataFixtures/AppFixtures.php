<?php

namespace App\DataFixtures;

use DateTime;
use DateTimeZone;
use Faker\Factory;
use App\Entity\User;
use App\Entity\Marque;
use DateTimeImmutable;
use App\Entity\Partials;
use App\Entity\Voitures;
use App\Entity\ImagesVoitures;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    private UserPasswordHasherInterface $hasher;
    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->hasher = $hasher;
    }
    public function load(ObjectManager $manager): void
    {
        // ! init faker
        $faker = Factory::create('fr_FR');

        //! création compte admin
        $admin = new User();

        $hash = $this->hasher->hashPassword($admin,'g/pAN16702');
        $admin ->setUsername('Geoffrey')
        ->setPassword($hash)
        ->setRoles(['ROLE_ADMIN']);
        $manager -> persist($admin);

        $users = [];

        // ! fixtures User
        for($u =  1; $u <=10; $u ++)
        {
        $usernameArray = [
            'Jordan', 'Ludo', 'Astrid', 'Axel', 'Benoit', 'Simon', 'Gauthier', 'La Directrice', 'La prof de Com','L\'équipe Nationale d\'Italie'
        ];
        $username = $usernameArray[rand(0, 9)];
           $user = new User();
           $hash = $this->hasher->hashPassword($user,'password');
           $user -> setUsername($username.-$u)
           ->setPassword($hash);

           $manager -> persist($user);
           $users[] = $user;
        }
        $guest = new User();
        $hash = $this->hasher->hashPassword($user,'password');
        $guest -> setUsername('Symfony')
        ->setPassword($hash);
        $manager -> persist($guest);

        //! fixtures marques
        $marqueTab = [];
        $imageArray = [
            'capture-d-ecran-2022-11-07-a-06-55-59-636ad5e297f2c850778990.png',
            'audi-636ff77105d8f539216081.jpg',
            'Bentley.jpg',
            'bmw-6365afab8e9a4858506463.jpg',
            'Bugatti.jpg',
            'Ferrari.jpg',
            'lamborghini-636ac90aba721718581488.jpg',
            'Lotus.jpg',
            'maserati-6368a33c36a7e159118500.jpg',
            'mercedes-logo-636605bc9553c894465992.jpg',
            'Opel.jpg',
            'porsche-logo-6365afedca18e139854860.jpg',
            'tesla-63673512de873455796457.jpg',
            'Toyota.jpg',
        ];
        for($m = 0; $m <= 13; $m ++)
        {
            $marque = new Marque();
            $marqueArray = [
                'Alfa Romeo', 'Audi',  'Bentley', 'BMW', 'Bugatti', 'Ferrari', 'Lamborghini', 'Lotus', 'Maserati',  'Mercedes','Opel', 'Porsche', 'Tesla', 'Toyota',
            ];

            $marques = $marqueArray[$m];
            $marque -> setNom($marques);
            $marque ->setImageName($imageArray[$m]);

            $manager -> persist($marque);
            $marqueTab[] = $marque;
    }

    //!fixtures voitures

for($v = 1; $v <=35; $v ++)
{
        $voiture = new Voitures();
        $user =  $users[rand(0, count($users)-1)];
        $marque = $marqueTab[rand(0, count($marqueTab)-1)];
        // ! tableau pour les choicesType
        $carburantArray = ['Essence', 'Diesel', 'Electrique'];
        $transmissionArray = ['Avant', 'Arrière'];
        $cylinderArray = [1, 2, 4];

        //! création d'une variable faisant un random du tableau associé
        $carburant = $carburantArray[rand(0,2)];
        $transmission = $transmissionArray[rand(0,1)];
        $cylinder = $cylinderArray[rand(0,2)];
        $nomArray = [
            'Audi TT-RS', 'Tesla Model-3', 'Alfa Romeo Giulia', 'Alfa Romeo Tonale', 'Porsche Taycan', 'Porsche Carrera', 'Mercedes AMG', 'Mercedes C350d', 'Mercedes Maybach', 'Mercedes EQE', 'Audi R8', 'Tesla Model-S', 'Lotus Elise', 'Nissan GT-R', 'Toyota Supra', 'Lamborghini Gallardo'
        ];
        $nom = $nomArray[rand(0, 4)];
        $titreArray = ['Silencieuse et économe', 'tout pour plaire', 'Dynamisme et efficacité', 'Défie toute attente', 'Complètement connectée', 'Mûrement réfléchie', 'Outrepasse toute exigence'];
        $titre = $titreArray[rand(0,6)];

        $voiture -> setNom($nom)
        ->setPrix(rand(15000, 875000))
        ->setKm($faker -> numberBetween($min = 5200, $max = 15000))
        ->setTitre($titre)
        ->setDescription($faker -> realText(150))
        ->setCarburant($carburant)
        ->setOwner(mt_rand(0, 4))
        ->setPuissance(mt_rand(150, 750))
        ->setTransmission($transmission)
        ->setYear($faker -> dateTime())
        ->setCylinder($cylinder)
        ->setMarque($marque)
        ->setUser($user);

        //! fixtures images voitures
        $images = [
            // '7e29d14a76d5f925b268e62efc79461d.webp',
            // '8b8646a8550f058cf3170269d236736f.webp',
            // 'f073c17de6cc7b883a1752522c19fd4c.jpg',
            // 'ec588bcfe3bdbb487b2a394e61636c08.webp',
            'Mercedes1.jpg',
            'AFT1.jpg',
            'BMW1.jpg',
            'Ferrari2.jpg',
            'Ferrari1.jpg',
            'Mercedes3.jpg',
            'Porsche1.jpg',
            'Mercedes2.webp',
            'Nissan1.png',
            'Nissan2.jpg',
            // '858b15906342c1bee1f7dbf71d5aa25d.jpg'
        ];
        // ! pour choisir l'image de couverture qui représente la première occurence du tableau, je fais un rand parmis les images du tableau
        $images[0] = $images[rand(0,9)];

        foreach($images as $image) {
            $imageV = new ImagesVoitures();
            $imageV -> setImageName($image);
            $voiture ->addImagesVoiture($imageV);
            $manager -> persist($imageV);
            $manager -> persist($voiture);
            }
        }

    //! voiture admin
    $voiture = new Voitures();
    $marque = $marqueTab[rand(0, count($marqueTab)-1)];
    // ! tableau pour les choicesType
    $carburantArray = ['Essence', 'Diesel', 'Electrique'];
    $transmissionArray = ['Avant', 'Arrière'];
    $cylinderArray = [1, 2, 4];

    //! création d'une variable faisant un random du tableau associé
    $carburant = $carburantArray[rand(0,2)];
    $transmission = $transmissionArray[rand(0,1)];
    $cylinder = $cylinderArray[rand(0,2)];
    $nomArray = [
        'Audi TT-RS', 'Tesla Model-3', 'Alfa Romeo Giulia', 'Alfa Romeo Tonale', 'Porsche Taycan', 'Porsche Carrera', 'Mercedes AMG', 'Mercedes C350d', 'Mercedes Maybach', 'Mercedes EQE', 'Audi R8', 'Tesla Model-S', 'Lotus Elise', 'Nissan GT-R', 'Toyota Supra', 'Lamborghini Gallardo'
    ];
    $nom = $nomArray[rand(0, 4)];
    $titreArray = ['Silencieuse et économe', 'tout pour plaire', 'Dynamisme et efficacité', 'Défie toute attente', 'Complètement connectée', 'Mûrement réfléchie', 'Outrepasse toute exigence'];
    $titre = $titreArray[rand(0,6)];

    $voiture -> setNom($nom)
    ->setPrix(rand(15000, 875000))
    ->setKm($faker -> numberBetween($min = 5200, $max = 15000))
    ->setTitre($titre)
    ->setDescription($faker -> realText(150))
    ->setCarburant($carburant)
    ->setOwner(mt_rand(0, 4))
    ->setPuissance(mt_rand(150, 750))
    ->setTransmission($transmission)
    ->setYear($faker -> dateTime())
    ->setCylinder($cylinder)
    ->setMarque($marque)
    ->setUser($admin);

    //! fixtures images voitures
    $images = [
        '7e29d14a76d5f925b268e62efc79461d.webp',
        '8b8646a8550f058cf3170269d236736f.webp',
        'mercedes-2-6361df35e424f162786475.jpg',
        'f073c17de6cc7b883a1752522c19fd4c.jpg',
        'ec588bcfe3bdbb487b2a394e61636c08.webp',
        'audi-tt-rs-5-63647f4a8e680646988240.jpg',
        'audi-r8-3-635984f52dc74658761477.jpg',
        'audi-r8-1-635b45902ea5d876518922.jpg',
        'alfa-romeo-giulia-1-6356a36d76ebe321663720.jpg',
        '858b15906342c1bee1f7dbf71d5aa25d.jpg'
    ];
    // ! pour choisir l'image de couverture qui représente la première occurence du tableau, je fais un rand parmis les images du tableau
    $images[0] = $images[rand(0,9)];

    foreach($images as $image) {
        $imageV = new ImagesVoitures();
        $imageV -> setImageName($image);
        $voiture ->addImagesVoiture($imageV);
        $manager -> persist($imageV);
        $manager -> persist($voiture);
        }
    //! fixtures partials
    $partials = new Partials();
    $partials -> setSection('header')
    ->setImageName('audi-4-6361c4ffedbb0604810218.jpg');
    $manager -> persist($partials);

    $manager -> flush();
    }
}