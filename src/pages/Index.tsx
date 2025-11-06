import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    telegram: '',
    experience: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 24 часов",
    });
    setFormData({ name: '', age: '', telegram: '', experience: '' });
  };

  const vacancies = [
    {
      title: 'Оператор чата',
      salary: 'от 50 000 ₽',
      requirements: ['18+ лет', 'Свободный английский', 'Интернет и компьютер'],
      description: 'Общение в текстовом чате с иностранными клиентами. Гибкий график, работа из любой точки мира.',
    },
    {
      title: 'Видео-консультант',
      salary: 'от 80 000 ₽',
      requirements: ['21+ лет', 'Английский язык', 'Камера и микрофон'],
      description: 'Видеозвонки с клиентами. Высокий доход, премии за активность. Комфортная удалённая работа.',
    },
  ];

  const benefits = [
    { icon: 'DollarSign', title: 'Еженедельные выплаты', description: 'Получайте деньги каждую неделю на удобный вам счёт' },
    { icon: 'Clock', title: 'Гибкий график', description: 'Работайте когда удобно — утром, днём или ночью' },
    { icon: 'Globe', title: 'Работа из дома', description: 'Из любой точки мира, нужен только интернет' },
    { icon: 'TrendingUp', title: 'Высокий доход', description: 'Зарабатывайте от 50 000 ₽ в месяц и больше' },
    { icon: 'Users', title: 'Поддержка 24/7', description: 'Команда всегда на связи и поможет с любым вопросом' },
    { icon: 'Award', title: 'Обучение', description: 'Бесплатное обучение от нашего агентства' },
  ];

  const faqs = [
    {
      question: 'Какие требования для работы?',
      answer: 'Возраст от 18 лет, знание английского языка приветствуется, наличие телефона и стабильного интернета. Опыт работы не требуется — мы обучим всему необходимому.',
    },
    {
      question: 'Как происходит оплата?',
      answer: 'Выплаты производятся еженедельно на банковскую карту или электронный кошелёк. Минимальная сумма для вывода — 5000 ₽.',
    },
    {
      question: 'Сколько часов нужно работать?',
      answer: 'График полностью гибкий. Вы сами выбираете, когда и сколько работать. Чем больше времени уделяете работе — тем выше доход.',
    },
    {
      question: 'Нужен ли опыт работы?',
      answer: 'Нет, опыт не требуется. Мы предоставляем бесплатное обучение, материалы и постоянную поддержку наших специалистов.',
    },
    {
      question: 'Это легально?',
      answer: 'Да, работа полностью легальна. Мы работаем с международными платформами для общения и все выплаты официальные.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-heading font-bold text-primary">Money Girls</h1>
          <div className="flex gap-6 items-center">
            <a href="#vacancies" className="text-sm font-medium hover:text-primary transition-colors">Вакансии</a>
            <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">Преимущества</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
            <Button size="sm" className="shadow-lg shadow-primary/20" onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}>
              Откликнуться
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 px-4 py-1.5 text-sm font-medium" variant="secondary">
              Удалённая работа для девушек
            </Badge>
            <h2 className="text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-purple-900 via-primary to-purple-600 bg-clip-text text-transparent leading-tight">
              Работай из дома<br />и зарабатывай от 50 000 ₽
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Общайся с иностранцами в чате и на видео-звонках. Еженедельные выплаты, гибкий график, полная удалёнка.
            </p>
            <div className="flex gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 shadow-2xl shadow-primary/30 hover:shadow-primary/40 transition-all animate-scale-in" onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}>
                Начать зарабатывать
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Узнать подробнее
                <Icon name="Info" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-heading font-bold mb-4">Почему выбирают нас</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комфортные условия работы и стабильный доход
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 bg-white/80 backdrop-blur">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={benefit.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="font-heading text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      <section id="faq" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-heading font-bold mb-4">Часто задаваемые вопросы</h3>
            <p className="text-lg text-muted-foreground">
              Ответы на популярные вопросы о работе
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-lg px-6 bg-white/80 backdrop-blur data-[state=open]:border-primary/50 transition-all">
                <AccordionTrigger className="text-left font-heading font-semibold text-lg hover:text-primary py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="apply" className="py-20 px-6">
        <div className="container mx-auto max-w-xl">
          <Card className="border-2 shadow-2xl bg-white/80 backdrop-blur">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-heading font-bold mb-2">Откликнуться на вакансию</CardTitle>
              <CardDescription className="text-base">
                Заполните форму и мы свяжемся с вами в течение 24 часов
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя *</label>
                  <Input
                    placeholder="Введите имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-11"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Возраст *</label>
                  <Input
                    type="number"
                    placeholder="18+"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    required
                    min="18"
                    className="h-11"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Telegram *</label>
                  <Input
                    placeholder="@username"
                    value={formData.telegram}
                    onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                    required
                    className="h-11"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Опыт работы (необязательно)</label>
                  <Textarea
                    placeholder="Расскажите о своём опыте..."
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    rows={4}
                    className="resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-base shadow-xl shadow-primary/30">
                  Отправить заявку
                  <Icon name="Send" size={18} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-purple-900 via-primary to-purple-800 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-heading font-bold mb-4">Money Girls</h4>
              <p className="text-purple-100 leading-relaxed">
                Агентство по набору сотрудниц на удалённую работу онлайн
              </p>
            </div>
            <div>
              <h5 className="font-heading font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-purple-100">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  evelinakaiditova@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={18} />
                  @EvelinaKaiditova
                </p>
              </div>
            </div>
            <div>
              <h5 className="font-heading font-semibold mb-4">Навигация</h5>
              <div className="space-y-2 text-purple-100">
                <a href="#vacancies" className="block hover:text-white transition-colors">Вакансии</a>
                <a href="#benefits" className="block hover:text-white transition-colors">Преимущества</a>
                <a href="#faq" className="block hover:text-white transition-colors">FAQ</a>
              </div>
            </div>
          </div>
          <div className="border-t border-purple-300/20 pt-6 text-center text-purple-100">
            <p>&copy; 2024 Money Girls. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;