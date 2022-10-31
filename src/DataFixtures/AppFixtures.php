<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\User;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;

class AppFixtures extends Fixture
{
    private PasswordAuthenticatedUserInterface $hash;
    public function load(ObjectManager $manager): void
    {
        $user = new User();
        $user->setUsername('Geoffrey')
            ->setRoles(['ROLE_ADMIN'])
            ->setPassword('$2y$13$1eC2cai5oZiz1a.OBPMy2u.hZ1M8M1lWjZoNmnsRiRcD1GnOL1tvC');
        $manager->persist($user);
        $manager->flush();
    }
}