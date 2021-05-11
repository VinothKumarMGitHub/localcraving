import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'restaurantFilter'
})
export class RestaurantFilterPipe implements PipeTransform {

  transform(items: any[], filter: Object): any {
    if (!items || !filter || filter == "All") {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter((item) => item.cuisine_type == filter);
  }

}
