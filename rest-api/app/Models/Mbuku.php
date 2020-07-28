<?php

namespace App\Models;

use CodeIgniter\Model;

class Mbuku extends Model
{
   protected $table = 'buku';

   public function getBuku($judul = false)
   {
      if ($judul === false) {
         return $this->findAll();
      } else {
         return $this->getWhere(['judul' => $judul])->getRowArray();
      }
   }

   public function insertBuku($data)
   {
      $query = $this->db->table($this->table)->insert($data);
      if ($query) {
         return true;
      } else {
         return false;
      }
   }

   public function updateBuku($data, $judul)
   {
      return $this->db->table($this->table)->update($data, ['judul' => $judul]);
   }

   public function deleteBuku($judul)
   {
      return $this->db->table($this->table)->delete(['judul' => $judul]);
   }
}