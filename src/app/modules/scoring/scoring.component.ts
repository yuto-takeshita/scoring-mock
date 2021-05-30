import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scoring',
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.scss'],
})
export class ScoringComponent implements OnInit {
  public isMenuOpen: boolean;

  constructor(private router: Router) {}

  async ngOnInit(): Promise<void> {}
}
