<template>
  <section id="homelab" class="fade-up mb-20 scroll-mt-8">
    <!-- Section header -->
    <div class="border-default mb-8 flex items-baseline gap-3.5 border-b pb-3.5">
      <span class="text-label tracking-14 text-dimmed font-mono">06</span>
      <span class="font-display text-muted text-xs font-semibold tracking-widest uppercase">
        Homelab
      </span>
    </div>

    <h3
      class="font-display text-section-h3 text-highlighted mb-3.5 leading-tight font-bold
        tracking-tight"
    >
      {{ $t('homelab.heading') }}
    </h3>
    <i18n-t keypath="homelab.p1" tag="p" class="text-default text-base leading-relaxed">
      <template #service>
        <span class="text-highlighted font-mono text-sm">Jellyfin + the *arr</span>
      </template>
    </i18n-t>
    <i18n-t keypath="homelab.p2" tag="p" class="text-default text-base leading-relaxed">
      <template #service>
        <span class="text-highlighted font-mono text-sm">Immich</span>
      </template>
    </i18n-t>
    <i18n-t keypath="homelab.p3" tag="p" class="text-default text-base leading-relaxed">
      <template #service>
        <span class="text-highlighted font-mono text-sm">n8n</span>
      </template>
    </i18n-t>
    <i18n-t keypath="homelab.p4" tag="p" class="text-default mb-5 text-base leading-relaxed">
      <template #compose>
        <span class="text-highlighted font-mono text-sm">docker-compose</span>
      </template>
      <template #vpn>
        <span class="text-highlighted font-mono text-sm">Tailscale</span>
      </template>
    </i18n-t>

    <!-- Services grid: 4-col desktop, 3-col tablet, 2-col mobile -->
    <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
      <UCard
        v-for="svc in services"
        :key="svc.name"
        :ui="{
          root: 'card-hover bg-muted border border-default rounded-lg',
          body: 'py-3.5 px-4 sm:py-3.5 sm:px-4',
        }"
      >
        <div class="mb-2.5 flex items-center justify-between">
          <UIcon :name="svc.icon" class="size-6" />
          <span class="flex items-center gap-1.5">
            <span
              class="dot-pulse bg-success inline-block size-1.5 rounded-full"
              style="box-shadow: 0 0 5px var(--ui-success)"
            />
          </span>
        </div>
        <div class="font-display text-highlighted mb-0.5 text-sm font-semibold">
          {{ svc.display }}
        </div>
        <div class="text-dimmed text-xs leading-snug">{{ svc.role }}</div>
      </UCard>
    </div>
  </section>
</template>

<script setup lang="ts">
const ICONS: Record<string, string> = {
  jellyfin: 'i-local-jellyfin',
  sonarr: 'i-local-sonarr',
  radarr: 'i-local-radarr',
  prowlarr: 'i-local-prowlarr',
  seerr: 'i-local-seerr',
  immich: 'i-local-immich',
  tailscale: 'i-local-tailscale',
  n8n: 'i-local-n8n',
}

const services = [
  {
    name: 'jellyfin',
    display: 'Jellyfin',
    role: 'media server',
    icon: ICONS.jellyfin,
  },
  {
    name: 'sonarr',
    display: 'Sonarr',
    role: 'tv automation',
    icon: ICONS.sonarr,
  },
  {
    name: 'radarr',
    display: 'Radarr',
    role: 'movie automation',
    icon: ICONS.radarr,
  },
  {
    name: 'prowlarr',
    display: 'Prowlarr',
    role: 'indexer manager',
    icon: ICONS.prowlarr,
  },
  {
    name: 'seerr',
    display: 'Seerr',
    role: 'request frontend',
    icon: ICONS.seerr,
  },
  {
    name: 'immich',
    display: 'Immich',
    role: 'photos / videos',
    icon: ICONS.immich,
  },
  {
    name: 'n8n',
    display: 'n8n',
    role: 'workflow automation',
    icon: ICONS.n8n,
  },
  {
    name: 'tailscale',
    display: 'Tailscale',
    role: 'mesh vpn',
    icon: ICONS.tailscale,
  },
]
</script>
