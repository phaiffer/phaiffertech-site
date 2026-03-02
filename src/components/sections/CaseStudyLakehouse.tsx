"use client";

import { useMemo } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { lakehouseDemo } from "@/content/lakehouseDemo";

const commandSnippet = `make setup
make download YEAR=2024 MONTH=1
make reset
make run YEAR=2024 MONTH=1
make inspect
make demo
python orchestration/local/run_pipeline.py run-backfill --from 2024-01 --to 2024-02`;

const repositoryUrl = "https://github.com/phaiffer/nyc-tlc-lakehouse";
const runbookUrl = "https://github.com/phaiffer/nyc-tlc-lakehouse/blob/main/docs/runbook.md";

export function CaseStudyLakehouse() {
  const locale = useLocale();
  const t = useTranslations("lakehouse");

  const integerFormatter = useMemo(
    () => new Intl.NumberFormat(locale === "pt-br" ? "pt-BR" : "en-US"),
    [locale],
  );

  const currencyFormatter = useMemo(
    () =>
      new Intl.NumberFormat(locale === "pt-br" ? "pt-BR" : "en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    [locale],
  );

  const formatInteger = (value: number): string => integerFormatter.format(value);
  const formatMoney = (value: number): string => currencyFormatter.format(value);

  return (
    <section id="lakehouse" className="border-t border-white/5 py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="sticky top-28">
            <p className="text-[10px] font-bold tracking-[0.3em] text-brand-cyan uppercase">{t("eyebrow")}</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">{t("title")}</h2>
            <p className="mt-6 text-base leading-relaxed text-ui-muted">{t("summary")}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={repositoryUrl} target="_blank" rel="noreferrer">
                {t("repositoryCta")}
              </Button>
              <Button href={runbookUrl} variant="secondary" target="_blank" rel="noreferrer">
                {t("runbookCta")}
              </Button>
              <Button href="#contact" variant="ghost">
                {t("contactCta")}
              </Button>
            </div>

            <div className="mt-8 rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-5">
              <p className="text-xs font-semibold tracking-[0.16em] text-ui-muted uppercase">{t("demoTitle")}</p>
              <pre className="mt-4 overflow-x-auto text-xs leading-relaxed text-ui-muted">{commandSnippet}</pre>
              <div className="mt-4 space-y-1 text-xs text-ui-muted">
                <p>
                  {t("windowLabel")}: <span className="text-ui-fg">{lakehouseDemo.window}</span>
                </p>
                <p className="break-all">
                  {t("runIdLabel")}: <span className="text-ui-fg">{lakehouseDemo.runId}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-5">
                <p className="text-xs font-semibold tracking-[0.14em] text-ui-muted uppercase">{t("bronzeEvents")}</p>
                <p className="mt-2 text-3xl font-black tracking-tight">{formatInteger(lakehouseDemo.bronzeEventsCount)}</p>
              </div>

              <div className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-5">
                <p className="text-xs font-semibold tracking-[0.14em] text-ui-muted uppercase">{t("silverTrips")}</p>
                <p className="mt-2 text-3xl font-black tracking-tight">{formatInteger(lakehouseDemo.silverTripsCount)}</p>
              </div>

              <div className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-5">
                <p className="text-xs font-semibold tracking-[0.14em] text-ui-muted uppercase">{t("goldFacts")}</p>
                <p className="mt-2 text-3xl font-black tracking-tight">
                  {formatInteger(lakehouseDemo.goldDailyFactRowCount)}
                </p>
              </div>

              <div className="rounded-[var(--radius-xl)] border border-brand-cyan/30 bg-brand-cyan/10 p-5">
                <p className="text-xs font-semibold tracking-[0.14em] text-ui-muted uppercase">{t("avgFare")}</p>
                <p className="mt-2 text-3xl font-black tracking-tight">{formatMoney(lakehouseDemo.monthAvgFarePerTrip)}</p>
              </div>
            </div>

            <div className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-semibold text-ui-fg">{t("chartTitle")}</p>
                <p className="text-xs text-ui-muted">
                  {t("snapshotLabel")}: {lakehouseDemo.generatedAtUtc}
                </p>
              </div>

              <div className="mt-4 h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lakehouseDemo.topDays} margin={{ top: 10, right: 12, bottom: 8, left: 0 }}>
                    <CartesianGrid stroke="rgba(255, 255, 255, 0.08)" strokeDasharray="3 3" />
                    <XAxis
                      dataKey="date"
                      axisLine={{ stroke: "rgba(255, 255, 255, 0.1)" }}
                      tickLine={false}
                      tick={{ fill: "var(--color-ui-muted)", fontSize: 12 }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "var(--color-ui-muted)", fontSize: 12 }}
                      tickFormatter={(value: number) => formatMoney(value)}
                    />
                    <Tooltip
                      formatter={(value: number | string | undefined) => formatMoney(Number(value ?? 0))}
                      contentStyle={{
                        backgroundColor: "rgba(2, 6, 23, 0.95)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "14px",
                      }}
                      labelStyle={{ color: "var(--color-ui-muted)" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="avgFarePerTrip"
                      stroke="var(--color-brand-cyan)"
                      strokeWidth={2}
                      dot={{ r: 3, strokeWidth: 1, fill: "var(--color-brand-navy)" }}
                      activeDot={{ r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
