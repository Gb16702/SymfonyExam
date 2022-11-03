<?php

namespace App\Entity;

use App\Entity\ImagesVoitures;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\VoituresRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Vich\UploaderBundle\Mapping\Annotation as Vich;


#[ORM\Entity(repositoryClass: VoituresRepository::class)]
#[Vich\Uploadable]

class Voitures
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nom = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 8, scale: 2)]
    private ?string $prix = null;

    #[ORM\Column]
    private ?int $km = null;

    #[ORM\OneToMany(mappedBy: 'voitures', targetEntity: ImagesVoitures::class, orphanRemoval: true, cascade: ['persist'])]
    private Collection $images_imagesVoitures;

    #[ORM\ManyToOne(inversedBy: 'voitures')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Marques $marque = null;

    public function __construct()
    {
        $this->images_imagesVoitures = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrix(): ?string
    {
        return $this->prix;
    }

    public function setPrix(string $prix): self
    {
        $this->prix = $prix;

        return $this;
    }

    public function getKm(): ?int
    {
        return $this->km;
    }

    public function setKm(int $km): self
    {
        $this->km = $km;

        return $this;
    }

    public function getVoitures(): ?Voitures
    {
        return $this->voiture;
    }

    public function setVoitures(?Voitures $voiture): self
    {
        $this->voiture = $voiture;

        return $this;
    }
    /**
     * @return Collection<int, ImagesVoitures>
     */
    public function getImagesImagesVoitures(): Collection
    {
        return $this->images_imagesVoitures;
    }

    // public function setImagesImagesVoitures(?ImagesVoitures $images_imagesVoitures): self
    // {
    //     $this -> images_imagesVoitures = $images_imagesVoitures;
    //     return $this;
    // }


    public function addImagesImagesVoiture(ImagesVoitures $imagesImagesVoiture): self
    {
        if (!$this->images_imagesVoitures->contains($imagesImagesVoiture)) {
            $this->images_imagesVoitures->add($imagesImagesVoiture);
            $imagesImagesVoiture->setVoitures($this);
        }

        return $this;
    }

    public function removeImagesImagesVoiture(ImagesVoitures $imagesImagesVoiture): self
    {
        if ($this->images_imagesVoitures->removeElement($imagesImagesVoiture)) {
            // set the owning side to null (unless already changed)
            if ($imagesImagesVoiture->getVoitures() === $this) {
                $imagesImagesVoiture->setVoitures(null);
            }
        }

        return $this;
    }

    public function getMarque(): ?Marques
    {
        return $this->marque;
    }

    public function setMarque(?Marques $marque): self
    {
        $this->marque = $marque;

        return $this;
    }
}
