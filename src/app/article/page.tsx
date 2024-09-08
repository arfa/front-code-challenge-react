import { Box } from '@mui/material';
import { ArticleHero } from '@/components/hero-article.component';
import BackButton from '@/components/backbutton.component';
import articleJson from '@/data/article.json';
import ArticleCarousel from '@/components/carousel.component';

export default function Article() {
  return (
    <main>
      <Box sx={{ mb: 2 }}>
        <BackButton />
      </Box>
      <ArticleHero
        title={articleJson.content[0].title}
        subtitle={articleJson.content[0].subtitle}
        author={articleJson.content[0].author}
        publishingDate={articleJson.content[0].publishingDate}
        backgroundAsset={articleJson.content[0].backgroundAsset}
        sideAsset={articleJson.content[0].sideAsset}
      />

      <div
        dangerouslySetInnerHTML={{ __html: articleJson.content[1].text || '' }}
        style={{
          fontSize: articleJson.content[1].highlight ? '1.2rem' : '0.8rem',
          padding: articleJson.content[1].highlight ? '0' : '0 115px',
        }}
      />
      <div
        dangerouslySetInnerHTML={{ __html: articleJson.content[2].text || '' }}
        style={{
          fontSize: articleJson.content[2].highlight ? '1.2rem' : '0.8rem',
          padding: articleJson.content[2].highlight ? '0' : '0 115px',
          marginTop: '80px',
          marginBottom: '80px',
        }}
      />

      <ArticleCarousel items={articleJson.content[3].items} />

      <div
        dangerouslySetInnerHTML={{ __html: articleJson.content[4].text || '' }}
        style={{
          fontSize: articleJson.content[4].highlight ? '1.2rem' : '0.8rem',
          padding: articleJson.content[4].highlight ? '0' : '0 115px',
          marginTop: '80px',
          marginBottom: '80px',
        }}
      />
    </main>
  );
}
