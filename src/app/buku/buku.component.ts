import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TambahBukuComponent } from '../tambah-buku/tambah-buku.component';
import { ApiService } from '../api.service'; // import apiservice;

@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrls: ['./buku.component.css']
})
export class BukuComponent implements OnInit {

  constructor(
  public dialog: MatDialog,
  public api: ApiService
  ) {
  this.getData()
  }

  ngOnInit(): void {
  }

  buku: any = []
  getData() {
    this.api.baca().subscribe(res => {
      this.buku = res
    })
  }

  buatBuku() {
    const dialogRef = this.dialog.open(TambahBukuComponent, {
      width: '450px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog ditutup');
    });
  }

  editBuku(data) {
    const dialogRef = this.dialog.open(TambahBukuComponent, {
      width: '450px',
      data: data
    });
    dialogRef.afterClosed().subscribe(res => {
      this.getData() // menampilkan data setelah diperbarui
    });
  }

  hapusBuku(judul) {
    console.log('data dihapus')
    this.api.hapus(judul).subscribe(res => {
      this.getData()
    })
  }

}
