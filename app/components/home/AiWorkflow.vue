<template>
  <section id="vault" class="fade-up mb-20 scroll-mt-8">
    <AppSectionHeader num="07" label-key="nav.ai" />

    <h3
      class="font-display text-section-h3 text-highlighted mb-3.5 leading-tight font-bold
        tracking-tight"
    >
      {{ $t('ai.heading1') }}
      <br />
      {{ $t('ai.heading2') }}
    </h3>
    <p class="text-default mb-6 max-w-2xl text-base leading-relaxed">{{ $t('ai.desc') }}</p>

    <div class="flex flex-col gap-4">
      <div
        v-for="tool in tools"
        :key="tool.nameKey"
        class="border-default bg-muted flex flex-wrap gap-6 rounded-2xl border p-5 sm:p-7"
      >
        <div class="w-38 flex-none">
          <UIcon :name="tool.icon" class="text-primary mb-3 size-6" />
          <div class="font-display text-highlighted text-lg font-semibold tracking-tight">
            {{ $t(tool.nameKey) }}
          </div>
          <div class="text-dimmed text-2xs mt-1.5 font-mono tracking-wider uppercase">
            {{ $t(tool.tagKey) }}
          </div>
        </div>
        <div class="min-w-0 flex-1 basis-80">
          <p class="text-default mb-3 max-w-2xl text-base leading-relaxed">
            {{ $t(tool.descKey) }}
          </p>
          <p class="text-dimmed max-w-2xl text-sm leading-relaxed">{{ $t(tool.soloKey) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const ICONS: Record<string, string> = {
  n8n: 'i-local-n8n',
  claude: 'i-local-claude',
  obsidian: 'i-local-obsidian',
}

const tools = [
  {
    nameKey: 'ai.n8nName',
    tagKey: 'ai.n8nTag',
    descKey: 'ai.n8nDesc',
    soloKey: 'ai.n8nSolo',
    icon: ICONS.n8n,
  },
  {
    nameKey: 'ai.claudeName',
    tagKey: 'ai.claudeTag',
    descKey: 'ai.claudeDesc',
    soloKey: 'ai.claudeSolo',
    icon: ICONS.claude,
  },
  {
    nameKey: 'ai.obsidianName',
    tagKey: 'ai.obsidianTag',
    descKey: 'ai.obsidianDesc',
    soloKey: 'ai.obsidianSolo',
    icon: ICONS.obsidian,
  },
]
</script>
