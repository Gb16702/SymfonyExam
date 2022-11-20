<?php

namespace App\Entity;

use App\Entity\Marque;
use Cocur\Slugify\Slugify;
use App\Entity\ImagesVoitures;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\VoituresRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\HasLifecycleCallbacks]
#[ORM\Entity(repositoryClass: VoituresRepository::class)]
#[Vich\Uploadable]

class Voitures
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Assert\Length(min: 3, max: 25, minMessage: "Le nom de la voiture ne peut pas faire moins de 3 caractères", maxMessage:"Le nom de la voiture ne peut pas excéder 25 caractères")]
    #[Assert\NotBlank(message: "Ce champs est obligatoire")]
    private ?string $nom = null;

    #[ORM\Column]
    #[Assert\NotBlank(message: "Ce champs est obligatoire")]
    #[Assert\Range(
        min: 0,
        max: 5000000,
        notInRangeMessage: 'Le prix doit se trouver entre 0 et 5 millions d\'euros',
    )]

    private ?int $prix = null;

    #[ORM\Column]
    #[Assert\Range(
        min: 0,
        max: 1000000,
        notInRangeMessage: 'Le kilométrage doit se trouver entre 0 et 1 million',
    )]
    private ?int $km = null;

    #[ORM\OneToMany(mappedBy: 'voitures', targetEntity: ImagesVoitures::class, orphanRemoval: true, cascade: ['persist'])]
    private Collection $imagesVoitures;

    #[ORM\ManyToOne(inversedBy: 'voitures')]
    #[ORM\JoinColumn(nullable: false)]
    #[Assert\NotBlank(message: "Ce champs est obligatoire")]
    // #[Assert\Choice(callback: [Marque::class, 'getMarque'])]
    private ?Marque $marque = null;

    #[ORM\Column(length: 25, nullable: true)]
    #[Assert\Length(max: 25, maxMessage:"Le titre ne peut pas excéder 25 caractères")]
    private ?string $Titre = null;

    #[ORM\Column(nullable:true, type: Types::TEXT)]
    #[Assert\Length(max: 350, maxMessage:"La description ne peut pas excéder 350 caractères")]
    private ?string $description = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank(message: "Ce champs est obligatoire")]
    #[Assert\Choice(['Essence', 'Diesel', 'Electrique'], message : 'Ce champs est incorrect')]
    private ?string $carburant = null;

    #[ORM\Column(length: 100)]
    private ?string $slug = null;

    #[ORM\ManyToOne(inversedBy: 'userVoiture')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    #[ORM\Column(nullable: true)]
    #[Assert\NotBlank(message: "Ce champs est obligatoire")]
    #[Assert\Range(
        min: 0,
        max: 4,
        notInRangeMessage: 'Le nombre de propriétaires ne peut pas excéder 4',
    )]
    private ?int $owner = null;

    #[ORM\Column]
    #[Assert\NotBlank(message: "Ce champs est obligatoire")]
    #[Assert\Range(
        min: 0,
        max: 2000,
        notInRangeMessage: 'La puissance doit se trouver entre 0 et 2000 chevaux',
    )]
    private ?int $puissance = null;

    #[ORM\Column(length: 255)]
    #[Assert\Choice(['Avant', 'Arrière'], message : 'Ce champs est incorrect')]
    #[Assert\NotBlank(message: "Ce champs est obligatoire")]
    private ?string $transmission = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $Year = null;

    #[ORM\Column]
    #[Assert\NotBlank(message: "Ce champs est obligatoire")]
    private ?int $cylinder = null;

    public function __construct()
    {
        $this->imagesVoitures = new ArrayCollection();
    }

    #[ORM\PrePersist]
    #[ORM\PreUpdate]
    public function initializeSlug():void
    {
        if(empty($this->slug))
        {
            $slugify = new Slugify();
            $this->slug = $slugify->slugify($this->nom.' '.uniqid());
        }
    }

    // ! Setters et Getters des champs d'entités
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

    public function getPrix(): ?int
    {
        return $this->prix;
    }

    public function setPrix(int $prix): self
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


    /**
     * @return Collection<int, ImagesVoitures>
     */
    public function getImagesVoitures(): Collection
    {
        return $this->imagesVoitures;
    }

    public function addImagesVoiture(ImagesVoitures $imagesVoiture): self
    {
        if (!$this->imagesVoitures->contains($imagesVoiture)) {
            $this->imagesVoitures->add($imagesVoiture);
            $imagesVoiture->setVoitures($this);
        }

        return $this;
    }

    public function removeImagesVoiture(ImagesVoitures $imagesVoiture): self
    {
        if ($this->imagesVoitures->removeElement($imagesVoiture)) {
            // set the owning side to null (unless already changed)
            if ($imagesVoiture->getVoitures() === $this) {
                $imagesVoiture->setVoitures(null);
            }
        }

        return $this;
    }

    public function getMarque(): ?Marque
    {
        return $this->marque;
    }

    public function setMarque(?Marque $marque): self
    {
        $this->marque = $marque;

        return $this;
    }

    public function getTitre(): ?string
    {
        return $this->Titre;
    }

    public function setTitre(string $Titre): self
    {
        $this->Titre = $Titre;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getCarburant(): ?string
    {
        return $this->carburant;
    }

    public function setCarburant(string $carburant): self
    {
        $this->carburant = $carburant;

        return $this;
    }

    public function getSlug(): string
    {
        return $this->slug;
    }
    public function setSlug(string $slug): self
    {
        $this->slug = $slug;
        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getOwner(): ?int
    {
        return $this->owner;
    }

    public function setOwner(?int $owner): self
    {
        $this->owner = $owner;

        return $this;
    }

    public function getPuissance(): ?int
    {
        return $this->puissance;
    }

    public function setPuissance(int $puissance): self
    {
        $this->puissance = $puissance;

        return $this;
    }

    public function getTransmission(): ?string
    {
        return $this->transmission;
    }

    public function setTransmission(string $transmission): self
    {
        $this->transmission = $transmission;

        return $this;
    }

    public function getYear(): ?\DateTimeInterface
    {
        return $this->Year;
    }

    public function setYear(\DateTimeInterface $Year): self
    {
        $this->Year = $Year;

        return $this;
    }

    public function getCylinder(): ?int
    {
        return $this->cylinder;
    }


    public function setCylinder(int $cylinder): self
    {
        $this->cylinder = $cylinder;

        return $this;
    }

    
}
