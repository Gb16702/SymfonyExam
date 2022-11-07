<?php

namespace App\Repository;

use App\Entity\Marques;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\Pagination\PaginationInterface;
use Knp\Component\Pager\PaginatorInterface;

/**
 * @extends ServiceEntityRepository<Marques>
 *
 * @method Marques|null find($id, $lockMode = null, $lockVersion = null)
 * @method Marques|null findOneBy(array $criteria, array $orderBy = null)
 * @method Marques[]    findAll()
 * @method Marques[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MarquesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry, private PaginatorInterface $paginator)
    {
        parent::__construct($registry, Marques::class);
    }



    public function save(Marques $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Marques $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * Pagination
     *
     * @param integer $page
     * @return PaginationInterface
     */
    public function paginate(int $page): PaginationInterface
     {
        $marque = $this ->createQueryBuilder('m')
        ->orderBy('m.nom', 'ASC')
        ->getQuery()
        ->getResult();

        $marque = $this -> paginator->paginate($marque, $page, limit: 6);
         return $marque;
     }

//    /**
//     * @return Marques[] Returns an array of Marques objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('m.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Marques
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
