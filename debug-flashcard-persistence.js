// Debug: Run this in browser console after saving flashcards
// This will show if cards are actually in the database

const checkFlashcards = async () => {
    console.log('=== Checking Flashcards ===');

    // 1. Check authentication
    const { data: { user } } = await supabase.auth.getUser();
    console.log('1. User ID:', user?.id);

    // 2. Check local state (React context)
    console.log('2. Cards in local state:', window.__REACT_DEVTOOLS_GLOBAL_HOOK__);

    // 3. Check database directly
    const { data: dbCards, error } = await supabase
        .from('flashcards')
        .select('*')
        .eq('user_id', user.id);

    if (error) {
        console.error('3. Database error:', error);
    } else {
        console.log('3. Cards in database:', dbCards.length);
        console.log('   First 3 cards:', dbCards.slice(0, 3));
    }

    // 4. Check if fetch is working
    const { data: fetchedCards } = await supabase
        .from('flashcards')
        .select('*')
        .eq('user_id', user.id);
    console.log('4. Fetched cards:', fetchedCards?.length);
};

// Run it
checkFlashcards();
