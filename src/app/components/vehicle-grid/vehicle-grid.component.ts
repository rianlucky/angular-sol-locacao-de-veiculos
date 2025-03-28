import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Vehicle {
  id: number;
  name: string;
  price: string;
  image: string;
  features: string[];
  category: string;
}

@Component({
  selector: 'app-vehicle-grid',
  imports: [CommonModule],
  templateUrl: './vehicle-grid.component.html',
  styleUrls: ['./vehicle-grid.component.css']
})
export class VehicleGridComponent implements OnInit {
  vehicles: Vehicle[] = [];
  filteredVehicles: Vehicle[] = [];
  categories: string[] = ['Todos', 'Compacto', 'Premium', 'Sedan', 'SUV', 'Utilitário']
  selectedCategory: string = 'Todos';
  loading: boolean = true;
  errorMessage: string = '';

  constructor() { }

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles(): void {
    // Simulando chamada assíncrona (substitua por serviço real depois)
    setTimeout(() => {
      try {
        this.vehicles = [
          {
            id: 1,
            name: 'Volkswagen T-Cross 1.4 TSI',
            price: 'R$ 117,44/dia',
            image: 'https://cdn.vw.com.br/assets/volksmais-ps/medias/t-cross-200-tsi-my25-34-frente-preto-ninja-9c1fe8ee-2005-469f-8e50-df2b3e673e50.png',
            features: ['Automático 6 velocidades', 'Completo (AC, Multimídia, Direção)', 'Tecnológico e urbano'],
            category: 'SUV'
          },
          {
            id: 2,
            name: 'Honda Civic 1.5 Turbo',
            price: 'R$ 156,60/dia',
            image: 'https://vehicle-images.dealerinspire.com/6720-110009464/thumbnails/large/2HGFE4F80SH335873/ea2e4fc97b75919b569a67a70eda4619.png',
            features: ['CVT Automático', 'Completo (AC, Bancos Couro, Tet Solar)', 'Esportivo e tecnológico'],
            category: 'Sedan'
          },
          {
            id: 3,
            name: 'Chevrolet Onix 1.0 Turbo',
            price: 'R$ 86,11/dia',
            image: 'https://www.chevroletnova.com.br/images/versoes/fotos/2024/03/1-0-2024_17111302131.png',
            features: ['Automático 6 velocidades', 'Completo (AC, Wi-Fi, CarPlay)', 'Conforto e conectividade'],
            category: 'Compacto'
          },
          {
            id: 4,
            name: 'Porsche 911 Carrera 3.0 Turbo',
            price: 'R$ 978,96/dia',
            image: 'https://gld-creative.s3.us-west-2.amazonaws.com/2025-porsche-911-carrera-gts-6d46b725a083-600x300.png',
            features: ['PDK 8 velocidades', 'Luxo (AC, Bancos Couro, Tet Solar)', 'Performance esportiva inigualável'],
            category: 'Premium'
          },
          {
            id: 5,
            name: 'Mercedes-Benz C200 2.0 Turbo',
            price: 'R$ 352,40/dia',
            image: 'https://cdn.autopapo.com.br/box/uploads/2019/07/25111351/mercedes-classe-c-coupe-565x318.png',
            features: ['Automático 9 velocidades', 'Luxo (AC, Tet Panorâmico, Ass. Massagem)', 'Luxo tecnologia incomparável'],
            category: 'Premium'
          },
          {
            id: 6,
            name: 'Volkswagen Polo 1.0 TSI',
            price: 'R$ 86,11/dia',
            image: 'https://storage.googleapis.com/dealersites-content/dealersites/vehicles/models/volkswagen/foto_model_890_1212.webp',
            features: ['Automático 6 velocidades', 'Completo (AC, Multimídia, Sensor)', 'Ágil e econômico urbano'],
            category: 'Compacto'
          },
          {
            id: 7,
            name: 'BYD Seal EV',
            price: 'R$ 313,24/dia',
            image: 'https://www.electrifying.com/files/O71j0igN5rzR-qtK/seal-cutout.png',
            features: ['Elétrico', 'Completo (AC, Multimídia, Multi-Sensores)', 'Aumenta esse volume 🔈🔈'],
            category: 'Premium'
          },
          {
            id: 7,
            name: "Toyota RAV4 Hybrid 2.5",
            price: "R$ 180,09/dia",
            image: "https://media.toyota.com.br/ea6e0247-b6ec-423c-b3e8-eac7afe3f2b7.png",
            features: ["CVT Automático", "Completo (AC, Tet Solar, Ass. Aquecidos)", "Híbrido econômico e espaçoso"],
            category: "SUV"
          },
          {
            id: 8,
            name: "Hyundai Creta 1.6 Turbo",
            price: "R$ 137,00/dia",
            image: "https://carro.blog.br/wp-content/uploads/2024/07/creta.webp",
            features: ["Automático 7 velocidades", "Completo (AC, Bancos Couro, CarPlay)", "Design moderno conectado"],
            category: "SUV"
          },
          {
            id: 9,
            name: "Jeep Renegade 1.3 Turbo",
            price: "R$ 125,27/dia",
            image: "https://file.kelleybluebookimages.com/kbb/base/evox/CP/50217/2023-Jeep-Renegade-front_50217_032_2400x1800_PBF.png",
            features: ["Automático 9 velocidades", "Completo (AC, 4x4, Câmbio Paddle Shift)", "Aventureiro compacto versátil"],
            category: "SUV"
          },
          {
            id: 10,
            name: "Chevrolet Tracker 1.2 Turbo",
            price: "R$ 148,76/dia",
            image: "https://image1.mobiauto.com.br/images/api/images/v1.0/322045311/transform/fl_progressive,f_webp,q_80",
            features: ["Automático 6 velocidades", "Completo (AC, Wi-Fi, Sensor Estacionamento)", "Leve e eficiente combustível"],
            category: "SUV"
          },
          {
            id: 11,
            name: "BMW X1 2.0 Turbo",
            price: "R$ 234,92/dia",
            image: "https://www.bmw.com.br/content/dam/bmw/common/all-models/i-series/iX1/2022/Navigation/bmw-xseries-iX1-modellfinder.png",
            features: ["Automático 8 velocidades", "Luxo (AC, Tet Panorâmico, Ass. Massagem)", "Elegante e potente performance"],
            category: "SUV"
          },
          {
            id: 12,
            name: "Toyota Corolla 2.0 Hybrid",
            price: "R$ 148,76/dia",
            image: "https://media.toyota.com.br/c0a78b1c-f547-47e5-aee1-4a10163811f3.png",
            features: ["CVT Automático", "Completo (AC, CarPlay, Piloto Automático)", "Híbrido silencioso confortável"],
            category: "Sedan"
          },
          {
            id: 13,
            name: "BYD Dolphin Mini EV",
            price: "R$ 150,86/dia",
            image: "https://www.byd.com/content/dam/byd-site/br/leasing/landing-page/pc/dolphin-mini-pc.png",
            features: ["Elétrico", "Completo (AC, Multi Sensores)", "simples e tecnológico"],
            category: "Compacto"
          },
          {
            id: 14,
            name: "Volkswagen Virtus 1.4 TSI",
            price: "R$ 125,27/dia",
            image: "https://carro.blog.br/wp-content/uploads/2024/05/Volkswagen-Virtus-Highline-1.0-TSi-2025-900x563.webp",
            features: ["Automático 6 velocidades", "Completo (AC, Multimídia, Direção)", "Dinâmico para cidade estrada"],
            category: "Sedan"
          },
          {
            id: 15,
            name: "Hyundai Elantra 2.0",
            price: "R$ 184,01/dia",
            image: "https://di-uploads-pod27.dealerinspire.com/dicksmithhyundai/uploads/2024/08/2024-Hyundai-Elantra-Exotic-Green.png",
            features: ["Automático 6 velocidades", "Completo (AC, Ass. Ventilados, CarPlay)", "Conforto premium acessível"],
            category: "Sedan"
          },
          {
            id: 16,
            name: "Audi A3 Sedan 1.4 TFSI",
            price: "R$ 215,34/dia",
            image: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAA_y2Vzc7kNBaGq7uHHtjMaEBoNDfwCQmJY-c_0nwada-QAAlpRmx60TqOHdtlx0lsJ_kqNzJ3wIo7YsOOFStYwAKJUy1KkZ86b47_Xzvf_XR5b4uXF2_evP7i9399rPX37fPL5Wm5XC7PSH_-5vV3P__z15fv_--HP-WX_7-8WIJ-Rgny-Qd2Qq2A4r9f_krK5b27_i0VzwIVL3-h4i9vLu_Ku_jve_Hju3h_cbm8T8kvL-9-f_toi37BiNNnUaVlDsnu6h-fFHLgBRsKrMa6bnkha6maqqmbivXNyDtel9j3vfyQuv4NZ4QBpUKvIuODn5OS0N0msd2gYEUNvPr07M8e6uZTnAERK80Im2IIKObGUCQiXyhSshgMIbKFRD21gwA0O5cUWVFtmeD1TpETXLWAXq-KAybVPHmCVkjv0qSnu5jq60C4MUdiRv5E4pawl4DH3l1LEGgKdSXkayEJOz8RBA1pJGgXbg0ILwTLIOaDJw4iJo4riIxsn2AwWJiGENcrh2EeBlbAsKDNJC7CbiQug93vorRHCRJjmRhIZctRgBwNvyKB-iNx3DXjoAYVbEeYFYlKjsxeCUeLHpQ1bb7Dt1MJajHtUw0q2fZoYVRbQ3MfzbFTvdGnzlUwznJcOIxJbOaOpfb07kwjrbxWodMbaGfYTRN2zxnoac7FADpil0tC3gcS06K5BH1gcyvAqIg1J9DqMsLRTQSLLFSEqQlXQipDBuPQmRpMOjpL0SYdzd3cREG925C2egAbU-UbsLRjgYHD6LpESKvj4GSqqLrzJ7uV4KZljS242ZRrT5i0oArzXp8DuDjxsyHQ5lBKwnqg6mlzWIDbjHNU_cwlH8DjULsa_LCsawFeinAwggzXO2ZFA_RkZOYJgYeSEEvyp7fYaU6YfKbIodrvEG2JhKFtCHNsaa19JJ89EXakffdJdZEa26bWjDChDGTMCVOjSphkGmnpphF7ctbklLpHbutoKtOMltxKuyHHHgLu7XZCCGE8OSw46eWO1PcDLMJU92jIfe9hsaHvVlic7ztNmPuOUpLtewurnsaVwbohEiLKoZ8Is-1uhK0nK0ZyXSwhSte6BuLdb47gd9qxqCLXPcSUmeAQtzGcBSQU1VNF0C2NM6FBxggbSwmSiB0dkjTk1XNI0lSqgaRwtS2k8SzIpkm7fqHIikAGS1aVnhqzpsKScDIvIAVsySEpmO5GrYSY2ABp2dreQIqmsZSZZSuo9zwWV00wTCgCDZra3OeRjkU6YvdEHR2pCw1kt1euhbzonkyUFy-2AnIc65FDTkvIhF2tewn52HhCyLeFq4VwFmcLu3CcXLDPTuMdaeUIe977c4cDfZ-REBU567D7SrY5FkkPHAlbRWJKlR7hNjh64BTY0W1zilgcBHJElnBaVZ0CTkdGIdHtpWjh3Ew_sf-osNs4h0mF_PjV_NWrt5_PW1IPh5XZPPK-YA9GWW3yI68q9oB-MfiY46YeBpzo6D7-N2_Szm9fvS3eMkYJgT4m2dLN__j1nOz935f36g8pKxVt0Bi0V4-cPUwqo6RrdFcxUdZj8dGLV998_QeXPxuZygYAAA?wid=1000",
            features: ["Manual 7 velocidades", "Luxo (AC, Bancos Couro, Tet Solar)", "Sofisticação alemã compacta"],
            category: "Sedan"
          },
          {
            id: 17,
            name: "Fiat Argo 1.3 Flex",
            price: "R$ 78,70/dia",
            image: "https://isencar.com.br/wp-content/uploads/2023/09/argo-drive-1-3-flex-pcd-1.jpg",
            features: ["Manual 5 marchas", "Básico (AC, Direção)", "Custo-benefício primeiro carro"],
            category: "Compacto"
          },
          {
            id: 18,
            name: "Chevrolet Onix Plus 1.0 Turbo",
            price: "R$ 97,86/dia",
            image: "https://garagem360.com.br/wp-content/uploads/2024/04/2_chevrolet-onix-plus-premier-2025-5.jpg",
            features: ["Automático 6 velocidades", "Completo (AC, Wi-Fi, CarPlay)", "Conforto e conectividade"],
            category: "Sedan"
          },
          {
            id: 19,
            name: "Renault Sandero 1.6 Flex",
            price: "R$ 70,44/dia",
            image: "https://www.evoyconsorcios.com.br/images/uploads/posts/renault-sandero-20-16v-hiflex-rs-manual-34636316533155140_1652980629.png",
            features: ["Manual 4 velocidades", "Completo (AC, Direção, Multimídia)", "Prático manutenção barata"],
            category: "Compacto"
          },
          {
            id: 20,
            name: "Hyundai HB20 1.6 Flex",
            price: "R$ 229,90/dia",
            image: "https://www.webmotors.com.br/imagens/prod/379453/HYUNDAI_HB20_1.0_TGDI_FLEX_PLATINUM_SAFETY_AUTOMATICO_3794531219573291.webp?s=fill&w=170&h=125&t=true",
            features: ["Automático 6 velocidades", "Completo (AC, Sensor Estacionamento)", "Design jovem seguro"],
            category: "Compacto"
          },
          {
            id: 21,
            name: "Peugeot 208 1.6 Flex",
            price: "R$ 90,02/dia",
            image: "https://mycaready.com/wp-content/uploads/2023/04/MCR-Peugeot-208-Puretech-Active-Pack-blanco-frontal.jpg",
            features: ["Automático 6 velocidades", "Completo (AC, Banco Couro, CarPlay)", "Estilo francês elegante"],
            category: "Compacto"
          },
          {
            id: 22,
            name: "Fiat Strada 1.4 Flex",
            price: "R$ 78,28/dia",
            image: "https://www.webmotors.com.br/imagens/prod/348356/FIAT_STRADA_1.4_FIRE_FLEX_ENDURANCE_CS_MANUAL_3483560942577849.webp",
            features: ["Manual 5 marchas", "Básico (AC, Direção)", "Robustez carga diária"],
            category: "Utilitário"
          },
          {
            id: 23,
            name: "Volkswagen Saveiro 1.8 Flex",
            price: "R$ 74,36/dia",
            image: "https://www.webmotors.com.br/imagens/prod/349112/VOLKSWAGEN_SAVEIRO_1.6_MSI_ROBUST_CS_16V_FLEX_2P_MANUAL_34911210540787465.webp",
            features: ["Manual 6 velocidades", "Básico (AC, Direção)", "Resistente para trabalho pesado"],
            category: "Utilitário"
          },
          {
            id: 24,
            name: "Land Rover Defender 3.0 Turbo",
            price: "R$ 469,88/dia",
            image: "https://www.webmotors.com.br/imagens/prod/349015/LAND_ROVER_DEFENDER_3.0_D300_TURBO_DIESEL_MHEV_110_XDYNAMIC_HSE_AWD_AUTOMATICO_34901512535836017.webp",
            features: ["Automático 8 velocidades", "Luxo (4x4, AC, Ass. Massagem, Tet Solar)", "Aventura com extremo conforto"],
            category: "Premium"
          },
          {
            id: 25,
            name: "BMW Série 7 3.0 Turbo",
            price: "R$ 587,36/dia",
            image: "https://gld-creative.s3.us-west-2.amazonaws.com/2025-bmw-3-series-m3-sedan-1f9397b464c9-600x300.png",
            features: ["Automático 8 velocidades", "Luxo (AC, Tet Panorâmico, Ass. Massagem)", "Tecnologia e luxo soberano"],
            category: "Premium"
          },
          {
            id: 26,
            name: "Audi Q8 3.0 TFSI",
            price: "R$ 509,04/dia",
            image: "https://production.autoforce.com/uploads/version/profile_image/11803/comprar-q7-s-line-55-tfsi-quattro-tiptronic_015b5e3e70.png",
            features: ["Automático 8 velocidades", "Luxo (AC, Tet Solar, Bancos Premium)", "Design arrojado alta tecnologia"],
            category: "Premium"
          }
          
        ];
        this.filteredVehicles = [...this.vehicles];
        this.loading = false;
      } catch (error) {
        this.errorMessage = 'Erro ao carregar veículos';
        this.loading = false;
      }
    }, 1000);
  }
  filterByCategory(category: string): void {
    this.selectedCategory = category;
    
    if (category === 'Todos') {
      this.filteredVehicles = [...this.vehicles];
    } else {
      this.filteredVehicles = this.vehicles.filter(vehicle => 
        vehicle.category === category
      );
    }
  }

  trackById(index: number, vehicle: Vehicle): number {
    return vehicle.id;
  }

  reserveVehicle(vehicleId: number): void {
    console.log('Iniciando reserva do veículo ID:', vehicleId);
    // Lógica de reserva será implementada aqui
  }
}