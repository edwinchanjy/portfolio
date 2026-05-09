<template>
  <section id="vault" class="fade-up mb-20 scroll-mt-8">
    <!-- Section header -->
    <div class="border-default mb-8 flex items-baseline gap-3.5 border-b pb-3.5">
      <span class="text-label tracking-14 text-dimmed font-mono">07</span>
      <span class="font-display text-muted text-xs font-semibold tracking-widest uppercase">
        AI Workflow
      </span>
    </div>

    <h3
      class="font-display text-section-h3 text-highlighted mb-3.5 leading-tight font-bold
        tracking-tight"
    >
      {{ $t('ai.heading1') }}
      <br />
      {{ $t('ai.heading2') }}
    </h3>
    <p class="text-default mb-6 text-base leading-relaxed">{{ $t('ai.desc') }}</p>

    <!-- 3 tool cards -->
    <div class="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
      <UCard
        v-for="tool in tools"
        :key="tool.nameKey"
        :ui="{
          root: 'card-hover bg-muted border border-default rounded-lg flex flex-col',
          body: 'flex flex-col gap-3 py-5 px-6 sm:py-5 sm:px-6 flex-1',
        }"
      >
        <div class="flex items-center justify-between">
          <UIcon :name="tool.icon" class="size-8" />
          <span class="text-2xs text-muted font-mono tracking-widest uppercase">
            {{ $t(tool.tagKey) }}
          </span>
        </div>
        <div class="font-display text-highlighted text-xl font-bold tracking-tight">
          {{ $t(tool.nameKey) }}
        </div>
        <div class="text-default text-sm leading-relaxed">{{ $t(tool.descKey) }}</div>
        <div class="border-default text-muted mt-auto border-t pt-3 text-xs leading-snug italic">
          {{ $t(tool.soloKey) }}
        </div>
      </UCard>
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
