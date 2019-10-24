import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  loadedItem: any;
  isLoading = false;
  constructor(private activatedRoute: ActivatedRoute, private service: MovieService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.isLoading = true;
    this.service.getDetails(id).subscribe(result => {
      console.log(result);
      this.loadedItem = result;
      this.isLoading = false;
    });
  }

  openWebsite() {
    window.open(this.loadedItem.Website, '_blank');
  }

}
