import { Component } from '@angular/core';
import { PostingService } from './posting.service';

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.scss']
})
export class PostingComponent {
  postingarray:any[]=[]
  first = 0; 
  rows = 20; 
  constructor(public service:PostingService){
  }




  posting(){
    this.service.GetPosting().subscribe((res:any)=>{
      this.postingarray=res.data
     console.log(this.postingarray)
     
    })
  }

  
  onPageChange(event: any): void {
    this.first = event.first;
  }

 
  ngOnInit(): void {
    

    this.posting()
  }
  ngDoCheck(): void {
   
  }

}
