## Backend Schema (Relational, Postgres-Friendly)

This schema mirrors the current frontend structure and supports multi-domain, company-aware roadmaps, questions, analytics, and bookmarks.

### Core Tables

```sql
create table users (
  id uuid primary key,
  email text unique not null,
  name text,
  password_hash text,
  created_at timestamptz default now()
);

create table domains (
  id uuid primary key,
  slug text unique not null, -- e.g. "swe", "data-analyst"
  name text not null
);

create table companies (
  id uuid primary key,
  name text unique not null,
  industry text,
  logo_url text
);

create table user_profiles (
  user_id uuid primary key references users(id) on delete cascade,
  current_domain_id uuid references domains(id),
  weekly_goal_minutes int,
  target_timeline_weeks int,
  updated_at timestamptz default now()
);
```

### Roadmaps

```sql
create table roadmaps (
  id uuid primary key,
  domain_id uuid references domains(id),
  title text not null,
  overview text,
  duration_weeks int,
  created_at timestamptz default now()
);

create table roadmap_weeks (
  id uuid primary key,
  roadmap_id uuid references roadmaps(id) on delete cascade,
  week_index int not null,
  title text,
  focus text
);

create table roadmap_week_items (
  id uuid primary key,
  roadmap_week_id uuid references roadmap_weeks(id) on delete cascade,
  item text not null
);

create table user_roadmaps (
  user_id uuid references users(id) on delete cascade,
  roadmap_id uuid references roadmaps(id) on delete cascade,
  progress_percent int default 0,
  started_at timestamptz,
  primary key (user_id, roadmap_id)
);
```

### Topics

```sql
create table topics (
  id uuid primary key,
  domain_id uuid references domains(id),
  name text not null
);

create table subtopics (
  id uuid primary key,
  topic_id uuid references topics(id) on delete cascade,
  name text not null
);
```

### Questions

```sql
create table questions (
  id uuid primary key,
  domain_id uuid references domains(id),
  title text not null,
  difficulty text not null, -- easy, medium, hard
  topic_id uuid references topics(id),
  subtopic_id uuid references subtopics(id),
  description text,
  solution text,
  preparation_advice text,
  created_at timestamptz default now()
);

create table question_hints (
  id uuid primary key,
  question_id uuid references questions(id) on delete cascade,
  hint text not null,
  hint_index int not null
);

create table question_variants (
  id uuid primary key,
  question_id uuid references questions(id) on delete cascade,
  variant text not null
);

create table question_companies (
  question_id uuid references questions(id) on delete cascade,
  company_id uuid references companies(id) on delete cascade,
  role text,
  round text,
  year int,
  frequency int,
  primary key (question_id, company_id, role, round, year)
);
```

### Company Analytics (per domain/role)

```sql
create table company_topic_stats (
  id uuid primary key,
  company_id uuid references companies(id) on delete cascade,
  domain_id uuid references domains(id),
  topic_id uuid references topics(id),
  question_count int,
  avg_difficulty text
);

create table company_recent_questions (
  id uuid primary key,
  company_id uuid references companies(id) on delete cascade,
  question_id uuid references questions(id),
  last_asked_month text -- e.g. "2026-03"
);
```

### Learning Modules (Learn page)

```sql
create table learning_modules (
  id uuid primary key,
  domain_id uuid references domains(id),
  topic_id uuid references topics(id),
  title text not null,
  content text
);
```

### User Activity, Progress, Analytics

```sql
create table user_question_attempts (
  id uuid primary key,
  user_id uuid references users(id) on delete cascade,
  question_id uuid references questions(id),
  status text not null, -- solved, attempted, review
  time_spent_minutes int,
  confidence int, -- 1-5
  created_at timestamptz default now()
);

create table user_topic_mastery (
  user_id uuid references users(id) on delete cascade,
  topic_id uuid references topics(id) on delete cascade,
  accuracy int,
  recent_attempts int,
  target_accuracy int,
  primary key (user_id, topic_id)
);

create table user_streaks (
  user_id uuid primary key references users(id) on delete cascade,
  current_streak int,
  longest_streak int,
  updated_at timestamptz default now()
);

create table user_sessions (
  id uuid primary key,
  user_id uuid references users(id) on delete cascade,
  started_at timestamptz default now(),
  duration_minutes int
);
```

### Bookmarks

```sql
create table bookmarks (
  user_id uuid references users(id) on delete cascade,
  question_id uuid references questions(id) on delete cascade,
  note text,
  created_at timestamptz default now(),
  primary key (user_id, question_id)
);
```

### Blog (Optional)

```sql
create table blog_posts (
  id uuid primary key,
  slug text unique not null,
  title text not null,
  summary text,
  content text,
  created_at timestamptz default now()
);
```
