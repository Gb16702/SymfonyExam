<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221024133207 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE images_voitures ADD voitures_id INT NOT NULL');
        $this->addSql('ALTER TABLE images_voitures ADD CONSTRAINT FK_287B4D71CCC4661F FOREIGN KEY (voitures_id) REFERENCES voitures (id)');
        $this->addSql('CREATE INDEX IDX_287B4D71CCC4661F ON images_voitures (voitures_id)');
        $this->addSql('ALTER TABLE voitures ADD marque_id INT NOT NULL');
        $this->addSql('ALTER TABLE voitures ADD CONSTRAINT FK_8B58301B4827B9B2 FOREIGN KEY (marque_id) REFERENCES marques (id)');
        $this->addSql('CREATE INDEX IDX_8B58301B4827B9B2 ON voitures (marque_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE images_voitures DROP FOREIGN KEY FK_287B4D71CCC4661F');
        $this->addSql('DROP INDEX IDX_287B4D71CCC4661F ON images_voitures');
        $this->addSql('ALTER TABLE images_voitures DROP voitures_id');
        $this->addSql('ALTER TABLE voitures DROP FOREIGN KEY FK_8B58301B4827B9B2');
        $this->addSql('DROP INDEX IDX_8B58301B4827B9B2 ON voitures');
        $this->addSql('ALTER TABLE voitures DROP marque_id');
    }
}
