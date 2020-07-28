import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tambah-buku',
  templateUrl: './tambah-buku.component.html',
  styleUrls: ['./tambah-buku.component.css']
})
export class TambahBukuComponent implements OnInit {

  data: any = {}
  constructor(
    public api: ApiService,
    public dialogRef: MatDialogRef<TambahBukuComponent>,
    @Inject(MAT_DIALOG_DATA) public itemData: any
  ) {
    if (itemData != null) {
      this.data = itemData;
    }
  }

  ngOnInit(): void {
  }

  insert(data) {
      this.api.simpan(data).subscribe(res => {
        this.dialogRef.close(true)
      })
  }

  insert(data) {
    if (data.judul == undefined) {
      this.api.simpan(data).subscribe(res => {
        this.dialogRef.close(true)
      })
    } else {
      this.api.ubah(data).subscribe(res => {
        this.dialogRef.close(true)
      })
    }
  }
}