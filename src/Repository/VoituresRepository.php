<?php

namespace App\Repository;

use App\Entity\Voitures;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\PaginatorInterface;
use Knp\Component\Pager\Pagination\PaginationInterface;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Flex\Response;

/**
 * @extends ServiceEntityRepository<Voitures>
 *
 * @method Voitures|null find($id, $lockMode = null, $lockVersion = null)
 * @method Voitures|null findOneBy(array $criteria, array $orderBy = null)
 * @method Voitures[]    findAll()
 * @method Voitures[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VoituresRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry, private PaginatorInterface $paginator)
    {
        parent::__construct($registry, Voitures::class);
    }

    public function save(Voitures $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Voitures $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    // public function sort(): Response {

    // }

    // public function paginateCar(int $page, ?Marques $marques = null): PaginationInterface

    // {
    //    $voiture = $this -> createQueryBuilder("v")
    //    ->orderBy('v.nom', 'ASC')
    //    ->getQuery()
    //    ->getResult();

    //    $voiture = $this -> paginator -> paginate($voiture, $page, limit: 10);
    //    return $voiture;
    // }
}

