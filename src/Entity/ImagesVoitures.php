<?php

namespace App\Entity;

use App\Repository\ImagesVoituresRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ImagesVoituresRepository::class)]
class ImagesVoitures
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $Images = null;

    #[ORM\ManyToOne(inversedBy: 'images_imagesVoitures')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Voitures $voitures = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getImages(): ?string
    {
        return $this->Images;
    }

    public function setImages(string $Images): self
    {
        $this->Images = $Images;

        return $this;
    }

    public function getVoitures(): ?Voitures
    {
        return $this->voitures;
    }

    public function setVoitures(?Voitures $voitures): self
    {
        $this->voitures = $voitures;

        return $this;
    }
}
