<?php

namespace App\Controllers;

use App\Models\Mbuku;
use CodeIgniter\RESTful\ResourceController;

class Buku extends ResourceController
{
   protected $format = 'json';
   protected $modelName = 'use App\Models\Mbuku';

   public function __construct()
   {
      header('Access-Control-Allow-Origin: *');
      header('Access-Control-Allow-Credentials: true');
      header('Access-Control-Allow-Methods: POST,GET,DELETE,PUT');
      header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
      header('Content-Type: x-www-form-urlencoded');
      $this->mbuku = new Mbuku();
   }

   public function index()
   {
      $mbuku = $this->mbuku->getBuku();

      foreach ($mbuku as $row) {
         $mbuku_all[] = [
            'judul' => $row['judul'],
            'sinopsis' => $row['sinopsis'],
            'kode' => $row['kode'],
         ];
      }

      return $this->respond($mbuku_all, 200);
   }

   public function create()
   {
      $judul = $this->request->getPost('judul');
      $sinopsis = $this->request->getPost('sinopsis');
      $kode = $this->request->getPost('kode');

      $data = [
         'judul' => $judul,
         'sinopsis' => $sinopsis,
         'kode' => $kode
      ];

      $simpan = $this->mbuku->insertBuku($data);

      if ($simpan == true) {
         $output = [
            'status' => 200,
            'message' => 'Berhasil menyimpan data',
            'data' => ''
         ];
         return $this->respond($output, 200);
      } else {
         $output = [
            'status' => 400,
            'message' => 'Gagal menyimpan data',
            'data' => ''
         ];
         return $this->respond($output, 400);
      }
   }

   public function show($judul = null)
   {
      $mbuku = $this->mbuku->getBuku($judul);

      if (!empty($mbuku)) {
         $output = [
            'judul' => $mbuku['judul'],
            'sinopsis' => $mbuku['sinopsis'],
            'kode' => $mbuku['kode'],
         ];

         return $this->respond($output, 200);
      } else {
         $output = [
            'status' => 400,
            'message' => 'Data tidak ditemukan',
            'data' => ''
         ];

         return $this->respond($output, 400);
      }
   }

   public function edit($judul = null)
   {
      $mbuku = $this->mbuku->getBuku($judul);

      if (!empty($mbuku)) {
         $output = [
            'judul' => $mbuku['judul'],
            'sinopsis' => $mbuku['sinopsis'],
            'kode' => $mbuku['kode'],
         ];

         return $this->respond($output, 200);
      } else {
         $output = [
            'status' => 400,
            'message' => 'Data tidak ditemukan',
            'data' => ''
         ];
         return $this->respond($output, 400);
      }
   }

   public function update($judul = null)
   {
      // menangkap data dari method PUT, DELETE
      $data = $this->request->getRawInput();

      // cek data berdasarkan judul
      $mbuku = $this->mbuku->getBuku($judul);

      //cek buku
      if (!empty($mbuku)) {
         // update data
         $updateBuku = $this->mbuku->updateBuku($data, $judul);

         $output = [
            'status' => true,
            'data' => '',
            'message' => 'sukses melakukan update'
         ];

         return $this->respond($output, 200);
      } else {
         $output = [
            'status' => false,
            'data' => '',
            'message' => 'gagal melakukan update'
         ];

         return $this->respond($output, 400);
      }
   }

   public function delete($judul = null)
   {
      // cek data berdasarkan judul
      $mbuku = $this->mbuku->getBuku($judul);

      //cek buku
      if (!empty($mbuku)) {
         // delete data
         $deleteBuku = $this->mbuku->deleteBuku($judul);

         $output = [
            'status' => true,
            'data' => '',
            'message' => 'sukses hapus data'
         ];

         return $this->respond($output, 200);
      } else {
         $output = [
            'status' => false,
            'data' => '',
            'message' => 'gagal hapus data'
         ];

         return $this->respond($output, 400);
      }
   }
}