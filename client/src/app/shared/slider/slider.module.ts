import { NgModule } from "@angular/core";

import { SwiperModule } from "swiper/angular";
const Slider = [SwiperModule];

@NgModule({
  imports: [Slider],
  exports: [Slider],
})
export class SliderSwiperModule {}
