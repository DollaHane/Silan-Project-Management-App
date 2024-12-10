import { Component, Input } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { Tool } from '../../../models/tool.model';
import { LucideAngularModule, ArrowDown, ChevronDown } from 'lucide-angular';

@Component({
  selector: 'app-tool-tab',
  standalone: true,
  imports: [CommonModule, LucideAngularModule,],
  templateUrl: './tool-tab.component.html',
})
export class ToolTabComponent {
  readonly ArrowDown = ChevronDown

  @Input() tool!: Tool;

  dropdownOpen: boolean = true

  activateDropdown() {
    if (this.dropdownOpen === false) {
      this.dropdownOpen = true;
    } else {
      this.dropdownOpen = false
    }
  }
  
}
