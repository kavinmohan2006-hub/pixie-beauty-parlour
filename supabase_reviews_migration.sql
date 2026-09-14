create table if not exists public.reviews (
    id uuid default gen_random_uuid() primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    name text not null,
    service text,
    rating integer not null check (rating >= 1 and rating <= 5),
    review text not null
);

alter table public.reviews enable row level security;

create policy "Allow anonymous read access on reviews"
    on public.reviews for select
    to anon
    using (true);

create policy "Allow anonymous insert access on reviews"
    on public.reviews for insert
    to anon
    with check (true);
