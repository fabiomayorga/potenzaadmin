import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import * as screenfull from 'screenfull';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Input() showToggle = true;
  @Input() showBranding = false;

  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleSidenavNotice = new EventEmitter<void>();
  @Output() darkModeAction = new EventEmitter<void>();

  private get screenfull(): screenfull.Screenfull {
    return screenfull as screenfull.Screenfull;
  }

  constructor() {}

  ngOnInit() {} 

  useDarkMode(){
    console.log("modo noche");
    this.darkModeAction.emit();
  }

  toggleSidenavNoticer(){
    console.log("ddd")
    this.toggleSidenavNotice.emit();
  }

  // TODO:
  toggleFullscreen() {
    if (this.screenfull.enabled) {
      this.screenfull.toggle();
    }
  }
}