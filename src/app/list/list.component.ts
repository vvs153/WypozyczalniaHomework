import { Component } from '@angular/core';
export type CarModel={
  nazwa: string,
  marka: string,
  nr_rejestracyjny: string,
  rocznik: number,
  kolor: string
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  carList: CarModel[] = [];
  constructor() {
    this.carList=[
      {
        nazwa: 'Focus',
        marka: 'Ford',
        nr_rejestracyjny: 'WPR52634',
        rocznik: 2013,
        kolor: 'Niebieski'
      },
      {
        nazwa: 'Fiesta',
        marka: 'Ford',
        nr_rejestracyjny: 'WPR332R2',
        rocznik: 2008,
        kolor: 'Czarny'
      },
      {
        nazwa: 'Puma',
        marka: 'Ford',
        nr_rejestracyjny: 'KK23600',
        rocznik: 2020,
        kolor: 'Niebieski'
      },
      {
        nazwa: 'RS2',
        marka: 'Audi',
        nr_rejestracyjny: 'WX4354G',
        rocznik: 1992,
        kolor: 'Niebieski'
      },
      {
        nazwa: 'A3',
        marka: 'Audi',
        nr_rejestracyjny: 'WGR235TX',
        rocznik: 2019,
        kolor: 'Srebrny'
      },
      {
        nazwa: 'Punto',
        marka: 'Fiat',
        nr_rejestracyjny: 'WT99A35',
        rocznik: 2012,
        kolor: 'Zielony'
      },
      {
        nazwa: 'Integra',
        marka: 'Honda',
        nr_rejestracyjny: 'KK244TG',
        rocznik: 2000,
        kolor: 'Żółty'
      },
      {
        nazwa: 'Civic',
        marka: 'Honda',
        nr_rejestracyjny: 'GSP343CT',
        rocznik: 2021,
        kolor: 'Czerwony'
      },
      {
        nazwa: '3 F30',
        marka: 'BMW',
        nr_rejestracyjny: 'DKL77E34',
        rocznik: 2017,
        kolor: 'Srebrny'
      },
      {
        nazwa: '5 G30',
        marka: 'BMW',
        nr_rejestracyjny: 'CT63A60',
        rocznik: 2020,
        kolor: 'Czarny'
      },
      {
        nazwa: '300ZX',
        marka: 'Nissan',
        nr_rejestracyjny: 'PO18R34',
        rocznik: 1989,
        kolor: 'Fioletowy'
      },
      {
        nazwa: 'Clio',
        marka: 'Renault',
        nr_rejestracyjny: 'BIA44E27',
        rocznik: 2022,
        kolor: 'Biały'
      },
      {
        nazwa: 'A-Klasse',
        marka: 'Mercedes-Benz',
        nr_rejestracyjny: 'ERA25T72',
        rocznik: 2018,
        kolor: 'Czerwony'
      },
      {
        nazwa: 'E-Klasse',
        marka: 'Mercedes-Benz',
        nr_rejestracyjny: 'TR63W15',
        rocznik: 2014,
        kolor: 'Czarny'
      },
      {
        nazwa: 'GLC',
        marka: 'Mercedes-Benz',
        nr_rejestracyjny: 'KRK88R39',
        rocznik: 2019,
        kolor: 'Srebrny'
      },
      {
        nazwa: 'Micra',
        marka: 'Nissan',
        nr_rejestracyjny: 'WI51873',
        rocznik: 2003,
        kolor: 'Turkusowy'
      },
      {
        nazwa: 'Leaf',
        marka: 'Nissan',
        nr_rejestracyjny: 'LUB25T72',
        rocznik: 2020,
        kolor: 'Szary'
      },
      {
        nazwa: 'Eclipse Cross',
        marka: 'Mitsubishi',
        nr_rejestracyjny: 'WX54M65',
        rocznik: 2021,
        kolor: 'Zielony'
      },
      {
        nazwa: 'Impreza',
        marka: 'Subaru',
        nr_rejestracyjny: 'WW92B52',
        rocznik: 2016,
        kolor: 'Niebieski'
      },
      {
        nazwa: 'Astra',
        marka: 'Opel',
        nr_rejestracyjny: 'WU11Z47',
        rocznik: 2015,
        kolor: 'Szary'
      },
      {
        nazwa: 'C3',
        marka: 'Citroen',
        nr_rejestracyjny: 'ZS21F16',
        rocznik: 2019,
        kolor: 'Czerwony'
      },
      {
        nazwa: 'C5',
        marka: 'Citroen',
        nr_rejestracyjny: 'WA81D31',
        rocznik: 2017,
        kolor: 'Srebrny'
      },
      {
        nazwa: '208',
        marka: 'Peugeot',
        nr_rejestracyjny: 'PO26133',
        rocznik: 2019,
        kolor: 'Niebieski'
      },
      {
        nazwa: '308',
        marka: 'Peugeot',
        nr_rejestracyjny: 'WB48W62',
        rocznik: 2010,
        kolor: 'Czerwony'
      },
      {
        nazwa: '911 GT3',
        marka: 'Porsche',
        nr_rejestracyjny: 'WA99355',
        rocznik: 1999,
        kolor: 'Żółty'
      },
    ]
  }
}
