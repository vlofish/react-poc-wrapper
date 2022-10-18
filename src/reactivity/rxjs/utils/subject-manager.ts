import { Subject } from 'rxjs/internal/Subject'

export class SubjectManager {
  private subject$ = new Subject()

  get subjectAsObservable() {
    return this.subject$.asObservable()
  }

  set subjectValue(value: string) {
    this.subject$.next(value)
  }
}
