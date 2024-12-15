export type PerfReview<T extends AsyncGenerator> = 
  T extends AsyncGenerator<infer G, any, any> ? G : never;
