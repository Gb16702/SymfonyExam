<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Cocur\Slugify\Slugify;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\String\Slugger\AsciiSlugger;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\HasLifecycleCallbacks]
#[ORM\Entity(repositoryClass: UserRepository::class)]
#[UniqueEntity(fields: ['username'], message: 'Un autre utilisateur possède déjà ce nom, merci de le modifier')]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;
    #[ORM\Column(length: 255)]
    private ?string $slug = null;

    #[ORM\Column(type: "string", length: 180, unique: true)]
    // #[Assert\NotBlank(message: "Le champs de nom d'utilisateur est requis")]
    // #[Assert\Length(min: 3, max: 20, minMessage: "Votre nom d'utilisateur doit faire au moins 3 caractères", maxMessage: "Votre nom d'utilisateur ne peut pas faire plus de 20 caractères")]
    private ?string $username = null;

    #[ORM\Column(type: "json")]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column(type:"string")]
    // #[Assert\Length(min: 3, max: 20, minMessage: "Votre mot de passe doit faire au moins 3 caractères", maxMessage: "Votre mot de passe ne peut pas faire plus de 20 caractères")]
    // #[Assert\NotNull(message: "Le champs de mot de passe ne peut pas être vide")]
    private ?string $password = null;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: Voitures::class, orphanRemoval: true)]
    private Collection $userVoiture;

    public function __construct()
    {
        $this->userVoiture = new ArrayCollection();
    }

    #[ORM\PrePersist]
    #[ORM\PreUpdate]
    public function initializeSlug():void
    {
        if(empty($this->slug))
        {
            $slugify = new Slugify();
            $this->slug = $slugify->slugify($this->username.' '.uniqid());
        }
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->username;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
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

    /**
     * @return Collection<int, Voitures>
     */
    public function getUserVoiture(): Collection
    {
        return $this->userVoiture;
    }

    public function addUserVoiture(Voitures $userVoiture): self
    {
        if (!$this->userVoiture->contains($userVoiture)) {
            $this->userVoiture->add($userVoiture);
            $userVoiture->setUser($this);
        }

        return $this;
    }

    public function removeUserVoiture(Voitures $userVoiture): self
    {
        if ($this->userVoiture->removeElement($userVoiture)) {
            // set the owning side to null (unless already changed)
            if ($userVoiture->getUser() === $this) {
                $userVoiture->setUser(null);
            }
        }

        return $this;
    }
}
