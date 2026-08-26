-- ROLES
create type public.app_role as enum ('admin','editor','user');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  role public.app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;
create policy "own roles readable" on public.user_roles for select to authenticated using (auth.uid() = user_id);

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.user_roles where user_id = _user_id and role = _role)
$$;

create or replace function public.update_updated_at_column()
returns trigger language plpgsql set search_path = public as $$
begin new.updated_at = now(); return new; end; $$;

-- SAFARI PACKAGES
create table public.safari_packages (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  country text not null,
  destination text not null,
  duration_days int not null default 1,
  duration_nights int not null default 0,
  safari_type text not null default 'Private Safari',
  travel_style text not null default 'Mid-Range',
  accommodation_level text not null default 'Mid-Range',
  starting_price numeric(10,2),
  adult_price numeric(10,2),
  child_price numeric(10,2),
  single_supplement numeric(10,2),
  group_price numeric(10,2),
  budget_price numeric(10,2),
  midrange_price numeric(10,2),
  luxury_price numeric(10,2),
  currency text not null default 'USD',
  short_description text,
  full_description text,
  main_image text,
  gallery_images text[] not null default '{}',
  inclusions text[] not null default '{}',
  exclusions text[] not null default '{}',
  interests text[] not null default '{}',
  featured boolean not null default false,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select on public.safari_packages to anon;
grant select, insert, update, delete on public.safari_packages to authenticated;
grant all on public.safari_packages to service_role;
alter table public.safari_packages enable row level security;
create policy "published packages public" on public.safari_packages for select to anon, authenticated using (published);
create policy "admins manage packages" on public.safari_packages for all to authenticated using (public.has_role(auth.uid(),'admin')) with check (public.has_role(auth.uid(),'admin'));
create trigger trg_packages_updated before update on public.safari_packages for each row execute function public.update_updated_at_column();

-- ITINERARY
create table public.package_itineraries (
  id uuid primary key default gen_random_uuid(),
  package_id uuid not null references public.safari_packages(id) on delete cascade,
  day_number int not null,
  title text not null,
  location text,
  description text,
  activities text[] not null default '{}',
  meals text[] not null default '{}',
  accommodation text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (package_id, day_number)
);
grant select on public.package_itineraries to anon;
grant select, insert, update, delete on public.package_itineraries to authenticated;
grant all on public.package_itineraries to service_role;
alter table public.package_itineraries enable row level security;
create policy "itineraries public" on public.package_itineraries for select to anon, authenticated using (
  exists (select 1 from public.safari_packages p where p.id = package_id and p.published)
);
create policy "admins manage itineraries" on public.package_itineraries for all to authenticated using (public.has_role(auth.uid(),'admin')) with check (public.has_role(auth.uid(),'admin'));
create trigger trg_itin_updated before update on public.package_itineraries for each row execute function public.update_updated_at_column();

-- ACCOMMODATIONS
create table public.accommodations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  location text,
  category text not null default 'Mid-Range',
  description text,
  image text,
  amenities text[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select on public.accommodations to anon;
grant select, insert, update, delete on public.accommodations to authenticated;
grant all on public.accommodations to service_role;
alter table public.accommodations enable row level security;
create policy "accommodations public" on public.accommodations for select to anon, authenticated using (true);
create policy "admins manage accommodations" on public.accommodations for all to authenticated using (public.has_role(auth.uid(),'admin')) with check (public.has_role(auth.uid(),'admin'));
create trigger trg_acc_updated before update on public.accommodations for each row execute function public.update_updated_at_column();

-- NATIONAL PARKS
create table public.national_parks (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  country text not null,
  overview text,
  wildlife text[] not null default '{}',
  best_time text,
  activities text[] not null default '{}',
  location text,
  image text,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select on public.national_parks to anon;
grant select, insert, update, delete on public.national_parks to authenticated;
grant all on public.national_parks to service_role;
alter table public.national_parks enable row level security;
create policy "parks public" on public.national_parks for select to anon, authenticated using (published);
create policy "admins manage parks" on public.national_parks for all to authenticated using (public.has_role(auth.uid(),'admin')) with check (public.has_role(auth.uid(),'admin'));
create trigger trg_parks_updated before update on public.national_parks for each row execute function public.update_updated_at_column();

-- TESTIMONIALS
create table public.testimonials (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  country text,
  rating int not null default 5,
  review text not null,
  safari_booked text,
  photo text,
  approved boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select, insert on public.testimonials to anon;
grant select, insert, update, delete on public.testimonials to authenticated;
grant all on public.testimonials to service_role;
alter table public.testimonials enable row level security;
create policy "approved reviews public" on public.testimonials for select to anon, authenticated using (approved);
create policy "anyone can submit review" on public.testimonials for insert to anon, authenticated with check (approved = false);
create policy "admins manage reviews" on public.testimonials for all to authenticated using (public.has_role(auth.uid(),'admin')) with check (public.has_role(auth.uid(),'admin'));
create trigger trg_rev_updated before update on public.testimonials for each row execute function public.update_updated_at_column();

-- TEAM
create table public.team_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  position text not null,
  biography text,
  years_experience int,
  languages text[] not null default '{}',
  photo text,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select on public.team_members to anon;
grant select, insert, update, delete on public.team_members to authenticated;
grant all on public.team_members to service_role;
alter table public.team_members enable row level security;
create policy "team public" on public.team_members for select to anon, authenticated using (true);
create policy "admins manage team" on public.team_members for all to authenticated using (public.has_role(auth.uid(),'admin')) with check (public.has_role(auth.uid(),'admin'));
create trigger trg_team_updated before update on public.team_members for each row execute function public.update_updated_at_column();

-- INQUIRIES
create table public.inquiries (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  email text not null,
  phone text,
  country text,
  travel_date date,
  flexible_dates boolean,
  adults int,
  children int,
  infants int,
  destination text,
  safari_package text,
  duration text,
  budget text,
  travel_style text,
  travel_type text,
  interests text[] not null default '{}',
  accommodation_preference text,
  transport text,
  message text,
  source text not null default 'inquiry_form',
  status text not null default 'New',
  admin_read boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant insert on public.inquiries to anon;
grant select, insert, update, delete on public.inquiries to authenticated;
grant all on public.inquiries to service_role;
alter table public.inquiries enable row level security;
create policy "anyone can submit inquiry" on public.inquiries for insert to anon, authenticated with check (true);
create policy "admins read inquiries" on public.inquiries for select to authenticated using (public.has_role(auth.uid(),'admin'));
create policy "admins update inquiries" on public.inquiries for update to authenticated using (public.has_role(auth.uid(),'admin')) with check (public.has_role(auth.uid(),'admin'));
create policy "admins delete inquiries" on public.inquiries for delete to authenticated using (public.has_role(auth.uid(),'admin'));
create trigger trg_inq_updated before update on public.inquiries for each row execute function public.update_updated_at_column();

-- SEED DATA
insert into public.safari_packages (title, slug, country, destination, duration_days, duration_nights, safari_type, travel_style, accommodation_level, starting_price, adult_price, child_price, single_supplement, short_description, full_description, main_image, inclusions, exclusions, interests, featured) values
('5 Days Serengeti, Ngorongoro & Tarangire Safari','5-days-serengeti-ngorongoro-tarangire-safari','Tanzania','Serengeti National Park',5,4,'Private Safari','Luxury','Luxury',2450,2450,1720,420,'Northern Tanzania''s greatest parks in one unhurried private journey.','Travel the classic northern circuit from Tarangire''s baobab plains to the endless Serengeti and down into the Ngorongoro Crater, with a private guide and 4x4 Land Cruiser throughout.','/src/assets/it-mara.jpg','{"Park fees","Game drives","Accommodation","All meals","Drinking water","Professional safari guide","4x4 Land Cruiser transportation"}','{"International flights","Visa","Travel insurance","Tips","Personal expenses","Alcoholic drinks","Optional activities"}','{"Wildlife","Big Five","Photography"}',true),
('3 Days Serengeti & Ngorongoro Safari','3-days-serengeti-ngorongoro-safari','Tanzania','Ngorongoro Crater',3,2,'Group Safari','Mid-Range','Mid-Range',980,980,690,180,'A short, high-impact taste of Tanzania''s two most famous wildlife stages.','Ideal for travellers short on time: two nights, two parks and a full crater descent among the densest concentration of predators in Africa.','/src/assets/hl-lion.jpg','{"Park fees","Game drives","Accommodation","All meals","Drinking water","Professional safari guide","Transportation"}','{"International flights","Visa","Travel insurance","Tips","Personal expenses","Alcoholic drinks"}','{"Wildlife","Big Five"}',true),
('7 Days Kenya & Tanzania Wildlife Adventure','7-days-kenya-tanzania-wildlife-adventure','Kenya & Tanzania','Masai Mara & Serengeti',7,6,'Private Safari','Mid-Range','Mid-Range',2980,2980,2100,520,'Cross the border with the herds — Masai Mara and Serengeti in one trip.','Follow the migration corridor from the Masai Mara into the Serengeti, ending at the Ngorongoro Crater rim. A single guide, two countries, one continuous wildlife story.','/src/assets/hl-gamedrive.jpg','{"Park fees","Game drives","Accommodation","All meals","Drinking water","Professional safari guide","Transportation"}','{"International flights","Visa","Travel insurance","Tips","Personal expenses","Alcoholic drinks"}','{"Great Migration","Wildlife","Photography"}',true),
('4 Days Amboseli & Tsavo Safari','4-days-amboseli-tsavo-safari','Kenya','Amboseli National Park',4,3,'Family Safari','Mid-Range','Mid-Range',1120,1120,780,210,'Elephant herds beneath Kilimanjaro, then the red dust of Tsavo.','A relaxed family-friendly route with short driving days, big elephant sightings and lodges with pools for the afternoons.','/src/assets/it-amboseli.jpg','{"Park fees","Game drives","Accommodation","All meals","Drinking water","Professional safari guide","Transportation"}','{"International flights","Visa","Travel insurance","Tips","Personal expenses"}','{"Wildlife","Mountains"}',false),
('3 Days Gorilla Trekking in Bwindi','3-days-gorilla-trekking-bwindi','Uganda','Bwindi Impenetrable Forest',3,2,'Private Safari','Luxury','Luxury',1890,1890,0,340,'One hour with a habituated mountain gorilla family in Bwindi.','Fly or drive to Bwindi for a guided trek into the ancient rainforest, plus a community walk with the Batwa people.','/src/assets/blog-gorilla.webp','{"Gorilla permit","Park fees","Accommodation","All meals","Drinking water","Professional guide","Transportation"}','{"International flights","Visa","Travel insurance","Tips","Personal expenses","Alcoholic drinks"}','{"Wildlife","Adventure","Culture"}',true),
('8 Days Tanzania Safari & Zanzibar Beach','8-days-tanzania-safari-zanzibar-beach','Tanzania & Zanzibar','Serengeti & Zanzibar',8,7,'Honeymoon Safari','Luxury','Luxury',3640,3640,2540,680,'Big cats first, then barefoot days on Zanzibar''s east coast.','Four nights on the northern safari circuit followed by three nights of white sand, dhow sunsets and spice-island quiet.','/src/assets/blog-beach.webp','{"Park fees","Game drives","Accommodation","Meals as specified","Drinking water","Professional safari guide","Internal flight to Zanzibar"}','{"International flights","Visa","Travel insurance","Tips","Personal expenses","Alcoholic drinks"}','{"Beach","Honeymoon","Wildlife"}',true),
('6 Days Rwanda Primates & Lakes','6-days-rwanda-primates-lakes','Rwanda','Volcanoes National Park',6,5,'Private Safari','Luxury','Luxury',3180,3180,0,590,'Gorillas, golden monkeys and the calm shores of Lake Kivu.','Kigali, Volcanoes National Park and Lake Kivu combined into a gentle, scenic six-day loop.','/src/assets/blog-rift-lake.webp','{"Gorilla permit","Park fees","Accommodation","All meals","Drinking water","Professional guide","Transportation"}','{"International flights","Visa","Travel insurance","Tips","Personal expenses"}','{"Wildlife","Culture","Photography"}',false),
('12 Days Grand East Africa Expedition','12-days-grand-east-africa-expedition','Kenya & Tanzania','Kenya, Tanzania & Zanzibar',12,11,'Private Safari','Ultra Luxury','Luxury',7450,7450,5200,1480,'The full arc — Mara, Serengeti, Crater and the Indian Ocean.','Our most complete journey: twelve days across two countries, private guiding throughout and the finest camps on each leg.','/src/assets/hero-safari.webp','{"Park fees","Game drives","Accommodation","All meals","Drinking water","Professional safari guide","Internal flights","Transportation"}','{"International flights","Visa","Travel insurance","Tips","Personal expenses","Alcoholic drinks"}','{"Big Five","Great Migration","Beach","Photography"}',false);

insert into public.package_itineraries (package_id, day_number, title, location, description, activities, meals, accommodation)
select p.id, d.day_number, d.title, d.location, d.description, d.activities::text[], d.meals::text[], d.accommodation
from public.safari_packages p
join (values
  ('5-days-serengeti-ngorongoro-tarangire-safari',1,'Arusha to Tarangire National Park','Tarangire','Morning pickup in Arusha and a scenic drive to Tarangire, famous for its elephant herds and ancient baobabs. Afternoon game drive before dinner at the lodge.','{"Morning pickup","Drive to Tarangire","Afternoon game drive","Dinner"}','{"Lunch","Dinner"}','Tarangire Safari Lodge'),
  ('5-days-serengeti-ngorongoro-tarangire-safari',2,'Tarangire to Serengeti','Serengeti','Depart after breakfast through the Ngorongoro highlands and into the Serengeti, arriving in time for an afternoon game drive on the central plains.','{"Breakfast","Transfer to Serengeti","Afternoon game drive"}','{"Breakfast","Lunch","Dinner"}','Serengeti Tented Camp'),
  ('5-days-serengeti-ngorongoro-tarangire-safari',3,'Full Day Serengeti','Serengeti','A full day exploring the Seronera valley with a picnic lunch in the bush — prime territory for lion, leopard and cheetah.','{"Sunrise game drive","Picnic lunch","Afternoon game drive"}','{"Breakfast","Lunch","Dinner"}','Serengeti Tented Camp'),
  ('5-days-serengeti-ngorongoro-tarangire-safari',4,'Serengeti to Ngorongoro','Ngorongoro','Morning game drive en route to the crater rim, with views over the caldera at sunset.','{"Morning game drive","Drive to crater rim","Sunset viewpoint"}','{"Breakfast","Lunch","Dinner"}','Ngorongoro Crater Lodge'),
  ('5-days-serengeti-ngorongoro-tarangire-safari',5,'Ngorongoro Crater to Arusha','Arusha','Early descent into the crater for a half-day game drive, then return to Arusha for your onward flight.','{"Crater descent","Game drive","Picnic lunch","Return transfer"}','{"Breakfast","Lunch"}','—'),
  ('3-days-serengeti-ngorongoro-safari',1,'Arusha to Serengeti','Serengeti','Depart Arusha and travel to the Serengeti with an afternoon game drive.','{"Pickup","Transfer","Afternoon game drive"}','{"Lunch","Dinner"}','Serengeti Camp'),
  ('3-days-serengeti-ngorongoro-safari',2,'Serengeti to Ngorongoro','Ngorongoro','Morning game drive in the Serengeti, then transfer to the Ngorongoro crater rim.','{"Morning game drive","Transfer","Rim viewpoint"}','{"Breakfast","Lunch","Dinner"}','Ngorongoro Lodge'),
  ('3-days-serengeti-ngorongoro-safari',3,'Crater Descent to Arusha','Arusha','Descend into the Ngorongoro Crater for a game drive before returning to Arusha.','{"Crater game drive","Picnic lunch","Return transfer"}','{"Breakfast","Lunch"}','—'),
  ('3-days-gorilla-trekking-bwindi',1,'Kigali or Entebbe to Bwindi','Bwindi','Travel to Bwindi Impenetrable Forest, arriving in the afternoon for a briefing and rest.','{"Transfer","Trek briefing"}','{"Lunch","Dinner"}','Bwindi Forest Lodge'),
  ('3-days-gorilla-trekking-bwindi',2,'Gorilla Trek & Batwa Community','Bwindi','An early trek into the forest to spend one hour with a habituated gorilla family, followed by a Batwa community walk.','{"Gorilla trek","One hour with gorillas","Community walk"}','{"Breakfast","Lunch","Dinner"}','Bwindi Forest Lodge'),
  ('3-days-gorilla-trekking-bwindi',3,'Bwindi to Departure','Kigali','Breakfast and a scenic drive back for your onward flight.','{"Breakfast","Return transfer"}','{"Breakfast"}','—')
) as d(slug, day_number, title, location, description, activities, meals, accommodation)
on d.slug = p.slug;

insert into public.national_parks (name, slug, country, overview, wildlife, best_time, activities, location, image) values
('Serengeti National Park','serengeti','Tanzania','Endless short-grass plains and the stage for the Great Migration — arguably the finest big-cat country on earth.','{"Lion","Leopard","Cheetah","Wildebeest","Zebra","Elephant"}','June to October for the migration; January to March for calving.','{"Game drives","Hot air balloon","Walking safari","Photography"}','Northern Tanzania','/src/assets/it-mara.jpg'),
('Ngorongoro Crater','ngorongoro','Tanzania','A collapsed volcanic caldera holding one of the densest wildlife populations in Africa, including black rhino.','{"Black rhino","Lion","Elephant","Flamingo","Buffalo"}','Year-round; June to October is driest.','{"Crater game drive","Cultural visits","Photography"}','Ngorongoro Conservation Area','/src/assets/hl-lion.jpg'),
('Tarangire National Park','tarangire','Tanzania','Baobab-studded river country famous for enormous elephant herds in the dry season.','{"Elephant","Giraffe","Lion","Eland","Birdlife"}','July to October.','{"Game drives","Walking safari","Birding"}','Northern Tanzania','/src/assets/it-tsavo.jpg'),
('Lake Manyara National Park','lake-manyara','Tanzania','A narrow strip of groundwater forest and alkaline lake, known for tree-climbing lions and flamingos.','{"Tree-climbing lion","Flamingo","Hippo","Baboon"}','June to October.','{"Game drives","Canopy walk","Birding"}','Northern Tanzania','/src/assets/blog-rift-lake.webp'),
('Masai Mara National Reserve','masai-mara','Kenya','Kenya''s flagship reserve — rolling grassland, resident big cats and the Mara River crossings.','{"Lion","Cheetah","Leopard","Wildebeest","Hippo"}','July to October for river crossings.','{"Game drives","Balloon safari","Maasai village visit"}','South-west Kenya','/src/assets/blog-maasai-mara.webp'),
('Amboseli National Park','amboseli','Kenya','Open plains and swamps under Kilimanjaro, with the most reliable big-tusker elephant sightings in Africa.','{"Elephant","Lion","Hyena","Waterbuck","Birdlife"}','June to October and January to February.','{"Game drives","Photography","Cultural visits"}','Southern Kenya','/src/assets/it-amboseli.jpg'),
('Tsavo East National Park','tsavo-east','Kenya','Vast red-earth wilderness with the Galana River and famous red elephants.','{"Elephant","Lion","Oryx","Crocodile"}','June to October.','{"Game drives","Lugard Falls","Birding"}','South-east Kenya','/src/assets/it-tsavo.jpg'),
('Bwindi Impenetrable Forest','bwindi','Uganda','Ancient montane rainforest sheltering roughly half the world''s remaining mountain gorillas.','{"Mountain gorilla","Forest elephant","Colobus monkey","Birdlife"}','June to August and December to February.','{"Gorilla trekking","Forest walks","Batwa community walk"}','South-west Uganda','/src/assets/blog-gorilla.webp'),
('Queen Elizabeth National Park','queen-elizabeth','Uganda','Savannah, crater lakes and the Kazinga Channel, home to tree-climbing lions in Ishasha.','{"Tree-climbing lion","Hippo","Elephant","Buffalo"}','January to February and June to July.','{"Game drives","Boat cruise","Chimp tracking"}','Western Uganda','/src/assets/blog-national-park.webp'),
('Volcanoes National Park','volcanoes','Rwanda','Terraced foothills rising into the Virunga volcanoes, home to gorillas and golden monkeys.','{"Mountain gorilla","Golden monkey","Buffalo"}','June to September.','{"Gorilla trekking","Golden monkey trek","Dian Fossey hike"}','Northern Rwanda','/src/assets/dest-uganda.webp');

insert into public.accommodations (name, location, category, description, image, amenities) values
('Serengeti Tented Camp','Central Serengeti, Tanzania','Mid-Range','Classic canvas tents on raised decks overlooking the Seronera plains.','/src/assets/why-lodge.jpg','{"En-suite bathroom","Hot bucket shower","Full board dining","Solar power","Laundry"}'),
('Ngorongoro Crater Lodge','Ngorongoro rim, Tanzania','Luxury','Rim-edge suites with fireplaces and uninterrupted views into the caldera.','/src/assets/hl-vehicle.jpg','{"Private butler","Fireplace","Full board dining","Wi-Fi","Spa"}'),
('Tarangire Safari Lodge','Tarangire, Tanzania','Mid-Range','Cliff-top bandas above the Tarangire River and its elephant traffic.','/src/assets/it-tsavo.jpg','{"En-suite bathroom","Swimming pool","Full board dining","Viewing deck"}'),
('Mara Bush Camp','Masai Mara, Kenya','Mid-Range','A small seasonal camp close to the Mara River crossing points.','/src/assets/blog-maasai-mara.webp','{"En-suite bathroom","Full board dining","Campfire","Guided walks"}'),
('Amboseli Family Lodge','Amboseli, Kenya','Budget','Simple, comfortable family rooms with Kilimanjaro views from the garden.','/src/assets/it-amboseli.jpg','{"Family rooms","Swimming pool","Full board dining","Wi-Fi"}'),
('Bwindi Forest Lodge','Bwindi, Uganda','Luxury','Timber and glass cottages on the forest edge, minutes from the trek briefing point.','/src/assets/blog-gorilla.webp','{"Fireplace","En-suite bathroom","Full board dining","Massage","Wi-Fi"}'),
('Zanzibar Beach Retreat','East coast, Zanzibar','Luxury','Barefoot-luxury beach rooms opening straight onto white sand.','/src/assets/blog-beach.webp','{"Beachfront","Swimming pool","Half board dining","Water sports","Spa"}');

insert into public.testimonials (customer_name, country, rating, review, safari_booked, approved) values
('Marta Nowak','Poland',5,'Our guide read the bush like a book — we saw a leopard hunt on day two. Everything from airport pickup to the final dinner was handled without us lifting a finger.','5 Days Serengeti, Ngorongoro & Tarangire Safari',true),
('James Whitfield','United Kingdom',5,'Third safari in East Africa and the first that felt genuinely personal. The vehicle, the camps, the pacing — all judged perfectly.','7 Days Kenya & Tanzania Wildlife Adventure',true),
('Aiko Tanaka','Japan',5,'One hour with the gorillas is something I will think about for the rest of my life. The team prepared us thoroughly and the lodge was wonderful.','3 Days Gorilla Trekking in Bwindi',true),
('Daniel & Rose Achieng','Kenya',4,'A brilliant family trip. Short drives, patient guide with the kids, and a pool at every stop.','4 Days Amboseli & Tsavo Safari',true),
('Sofia Ramirez','Spain',5,'Safari then Zanzibar was the right call for our honeymoon. Seamless internal flight and a beach room we did not want to leave.','8 Days Tanzania Safari & Zanzibar Beach',true);

insert into public.team_members (name, position, biography, years_experience, languages, photo, sort_order) values
('Joseph Mwangi','Founder & Head Safari Guide','Born on the edge of the Mara, Joseph has guided across Kenya and Tanzania since his early twenties and still leads several trips a year himself.',22,'{"English","Swahili","Maa"}','/src/assets/hl-gamedrive.jpg',1),
('Amina Hassan','Head of Safari Planning','Amina designs every custom itinerary, matching camps, seasons and driving distances to how each family actually likes to travel.',12,'{"English","Swahili","Arabic"}','/src/assets/why-lodge.jpg',2),
('Peter Odhiambo','Senior Guide & Photographer','A specialist in big-cat behaviour and light, Peter is the guide our photography clients ask for by name.',15,'{"English","Swahili","Luo"}','/src/assets/hl-lion.jpg',3),
('Grace Wanjiru','Guest Relations','Grace is the voice on the other end of the phone from first enquiry to the thank-you note after you fly home.',8,'{"English","Swahili","French"}','/src/assets/hl-vehicle.jpg',4);