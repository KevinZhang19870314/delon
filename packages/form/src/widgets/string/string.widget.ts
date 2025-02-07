import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, switchMap, takeUntil } from 'rxjs/operators';

import { SFValue } from '../../interface';
import { ControlUIWidget } from '../../widget';
import { SFStringWidgetSchema } from './schema';

@Component({
  selector: 'sf-string',
  templateUrl: './string.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None
})
export class StringWidget extends ControlUIWidget<SFStringWidgetSchema> implements OnInit {
  type!: string;
  private change$: BehaviorSubject<string> | null = null;

  ngOnInit(): void {
    const {
      addOnAfter,
      addOnAfterIcon,
      addOnBefore,
      addOnBeforeIcon,
      prefix,
      prefixIcon,
      suffix,
      suffixIcon,
      autofocus
    } = this.ui;
    this.type = !!(
      addOnAfter ||
      addOnBefore ||
      addOnAfterIcon ||
      addOnBeforeIcon ||
      prefix ||
      prefixIcon ||
      suffix ||
      suffixIcon
    )
      ? 'addon'
      : '';
    if (autofocus === true) {
      setTimeout(() => {
        (
          (this.injector.get(ElementRef).nativeElement as HTMLElement).querySelector(`#${this.id}`) as HTMLElement
        ).focus();
      }, 20);
    }
    this.initChange();
  }

  reset(value: SFValue): void {
    if (!value && this.schema.format === 'color') {
      this.setValue('#000000');
    }
  }

  private initChange(): void {
    const dueTime = this.ui.changeDebounceTime;
    const changeFn = this.ui.change;
    if (dueTime == null || dueTime <= 0 || changeFn == null) return;

    this.change$ = new BehaviorSubject<string>(this.value);
    let obs = this.change$.asObservable().pipe(debounceTime(dueTime), takeUntil(this.sfItemComp!.unsubscribe$));
    if (this.ui.changeMap != null) {
      obs = obs.pipe(switchMap(this.ui.changeMap));
    }
    obs.subscribe(val => changeFn(val));
  }

  change(val: string): void {
    this.setValue(val);
    if (this.change$ != null) {
      this.change$.next(val);
      return;
    }
    if (this.ui.change) this.ui.change(val);
  }

  focus(e: FocusEvent): void {
    if (this.ui.focus) this.ui.focus(e);
  }

  blur(e: FocusEvent): void {
    if (this.ui.blur) this.ui.blur(e);
  }

  enter(e: Event): void {
    if (this.ui.enter) this.ui.enter(e);
  }
}
