import { HomeCard } from '@/components/card.component';
import styles from './page.module.css';
import { Box, Grid, Typography } from '@mui/material';
import HeroBanner from '@/components/home-hero.component';
import homeJson from '@/data/index.json';

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroBanner
        title={homeJson.content[0].title}
        subtitle={homeJson.content[0].subtitle}
        description={homeJson.content[0].description}
        backgroundAsset={homeJson.content[0].backgroundAsset}
        foregroundAsset={homeJson.content[0].foregroundAsset}
      />

      <Typography
        variant='body1'
        sx={{
          mb: 1,
          mt: 4,
        }}
      >
        {homeJson.content[1].title}
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <HomeCard
            title={homeJson.content[1].cards?.[0].title}
            subtitle={homeJson.content[1].cards?.[0].subtitle}
            description={homeJson.content[1].cards?.[0].description}
            backgroundAsset={homeJson.content[1].cards?.[0].backgroundAsset}
            cta={homeJson.content[1].cards?.[0].cta}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <HomeCard
            title={homeJson.content[1].cards?.[1].title}
            subtitle={homeJson.content[1].cards?.[1].subtitle}
            description={homeJson.content[1].cards?.[1].description}
            backgroundAsset={homeJson.content[1].cards?.[1].backgroundAsset}
            cta={homeJson.content[1].cards?.[1].cta}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <HomeCard
            title={homeJson.content[1].cards?.[2].title}
            subtitle={homeJson.content[1].cards?.[2].subtitle}
            description={homeJson.content[1].cards?.[2].description}
            backgroundAsset={homeJson.content[1].cards?.[2].backgroundAsset}
            cta={homeJson.content[1].cards?.[2].cta}
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} mt={1} mb={4}>
        <Grid item xs={6} md={3}>
          <HomeCard
            title={homeJson.content[1].cards?.[3].title}
            subtitle={homeJson.content[1].cards?.[3].subtitle}
            description={homeJson.content[1].cards?.[3].description}
            backgroundAsset={homeJson.content[1].cards?.[3].backgroundAsset}
            cta={homeJson.content[1].cards?.[3].cta}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <HomeCard
            title={homeJson.content[1].cards?.[4].title}
            subtitle={homeJson.content[1].cards?.[4].subtitle}
            description={homeJson.content[1].cards?.[4].description}
            backgroundAsset={homeJson.content[1].cards?.[4].backgroundAsset}
            cta={homeJson.content[1].cards?.[4].cta}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <HomeCard
            title={homeJson.content[1].cards?.[5].title}
            subtitle={homeJson.content[1].cards?.[5].subtitle}
            description={homeJson.content[1].cards?.[5].description}
            backgroundAsset={homeJson.content[1].cards?.[5].backgroundAsset}
            cta={homeJson.content[1].cards?.[5].cta}
          />
        </Grid>
      </Grid>
    </main>
  );
}
