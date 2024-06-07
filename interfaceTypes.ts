// Key ratios: 
// Market Cap
// Shares outstanding
// P/E ratio
// P/S ratio
// P/B Ratio
// PEG Ratio
// Current Ratio
// Debt to Equity Ratio
// EPS 


export interface keyRatiosINTERFACE {
    id: string,
    MktCap: string | null
    Shares: string,
    PE: string,
    PS: string,
    PG: string,
    PEG: string,
    current: string,
    DE: string,
    EPS: string,
}

export interface candlestickINTERFACE {
    id: number| null,
    date: string | null | any,
    open: number | null,
    high: number | null,
    low: number | null,
    close: number | null,
    volume: number | null
}

export type candlestickARRAYTYPE = candlestickINTERFACE[]

// in a fullly full stack app would possibly denormalize userid | username into these tables.
export interface tradeTickerINTERFACE {
    id: number,
    time: string, // or GraphQL Scalar type Date
    quantity: number,
    price: Number
}
// export interface analystINTERFACE { }

export interface APPLEcompanyINTERFACE {
    keyRatios: keyRatiosINTERFACE | null,
    candleStick: candlestickINTERFACE | null,
    tradeTicker: tradeTickerINTERFACE | null,
    // analysts: analystINTERFACE | null,
}

export interface dayMonthYearINTERFACE {
    day: string | number,
    month: string | number, 
    year: string | number
}



// JOURNALL INTERFACES BELOW
//   id, location_id, username, email, password, birthday, joinday, last_username_change, full_name, profile_picture,
// icon, cover_photo, ballot_title, gender, orientation, ethnicity, role, no_ads, post_order, show_followers,
// avg_likes, avg_comments, daily_scrolling, avg_scrolling, avg_shares, total_posts, total_followers, total_following, 
// i_can_trash_u, trash_u_today, trash_me_today, trash_u_30, trash_me_30, total_sessions, sessions_this_year,
// vibe_u_today, last_vibe_gift, spam_percent, reported_posts_me, sus_start_date, has_reported_u,
// explicit_posts, has_marked_exp, thought_limit, comment_limit, timestamp

export interface userINTERFACE {
    id: number,
    location_id: number,
    username: string,
    password: string,
    email: string,
    birthday: string,
    joinday: string,
    last_username_change: string | null,
    full_name: string | null, 
    icon: string | null,
    cover_photo: string,
    gender: string | null,
    orientation: string | null,
    ethnicity: string | null,
    role: string | null,
    no_ads: boolean | null, 
    post_order: string | null,
    show_followers: boolean | null,
    avg_likes: number | null,
    avg_comments: number | null,
    daily_scrolling: number | null,
    avg_scrolling: number | null,
    avg_shares: number | null,
    total_posts: number | null,
    total_followers: number | null,
    total_following: number | null,
    i_can_trash_u: number | null,
    trash_u_today: number | null,
    trash_me_today: number | null,
    trash_u_30: number | null,
    trash_me_30: number | null,
    total_sessions: number | null,
    sessions_this_year: number | null,
    vibe_u_today: number | null,
    last_vibe_gift: string | null,
    spam_percent: number | null,
    reported_posts_me: number | null,
    sus_start_date: string | null,
    has_reported_u: number | null,
    explicit_posts: number | null,
    has_marked_exp: number | null,
    thought_limit: number | null,
    comment_limit: number | null,
    timestamp: string | null,
    token: string | null    
    // days[]
    // privacy[]
    // thoughts[]
    // habits[]
    // dreams[]
}

// probably dismantling: UsersIDnUsernameINTERFACE
export interface UsersIDnUsernameINTERFACE {
    id:         number,
    username:   string
}

export interface usernameIdIconINTERFACE {
    id:         number,
    username:   string,
    icon:       string
}

export interface dayINTERFACE {
    id:                         number,
    user_id:                    number | null,
    location_id:                number | null,
    category_id:                number | null,
    title:                      string | null,
    caption:                    string | null,                 

    // non nullable + day.id of course
    non_anonymous:              string,
    thoughts_ok:                string,
    shareable:                  string,
    downloadable:               string,
    feedface:                   string
    show_views_ok:              boolean | null,
    show_time_ok:               boolean | null,
    public_likes:               boolean | null,     
    thought_blanks_ok:          boolean | null,
    thought_blank_time:         string | null,
    thought_blank_user:         string | null,
    rlly_like_ok:               string | null,
    rlly_like_group:            boolean | null,        
    is_reported:                boolean | null,
    is_in_trash:                boolean | null,
    trash_tally:                number | null,
    date:                       string //       | null      // most likely not nullable because:            most recent post functionality
    lock:                       string | null,
    unlock:                     string | null,
    sus_content:                string | null,     
                                                
    // FIX:                      thoughtsINTERFACE
    thoughts:                   any[],
    moments:                    any[],
    fields:                     any[],
    greatfull:                  any[],
}

export interface thoughtsINTERFACE {
    id:                         number,
    user_id:                    number,
    username:                   string,
    user_profile_icon:          string,
    day_id:                     number | null,
    location_id:                number | null,
    moment_id:                  number | null,
    parent_thought_id:          string | null,
    greatfullagain_id:          number | null,
    suggestion_id:              number | null,
    feedgame_id:                number | null,
    meme_id:                    number | null,
    title:                      string | null,
    thought:                    string | null,
    thoughts:                   string[] | null,
    date:                       string | null,
    non_anonymous:              string,
    starrable:                  string,
    thoughts_ok:                string,
    comment_icon:               string | null,
    downloadable:               string,
    explicit:                   boolean | null,
    is_voice:                   boolean,
    is_video:                   boolean,
    stars_show_avg:             boolean | null,
    stars_show_users:           boolean | null,
    blank_thoughts_ok:          boolean | null,
    blank_thoughts_username:    string | null,
    is_reported:                boolean | null,
    is_in_trash:                boolean | null,
    trash_tally:                number | null,
    on_profile:                string | null,
    sus_content:                boolean | null,
}

export interface starsINTERFACE {
    id:                         number,
    user_id:                    number,
    username:                   string | null,
    user_profile_icon:          string | null,
    day_id:                     number,
    thought_id:                 number | null,
    message_id:                 number | null,
    suggestion_id:              number | null,
    stars_show_avg:             boolean,
    stars_show_users:           boolean,
    stars:                      number,
    timestamp:                  string | null,
    updatedAtBin:               string[] | null
}
                                // associations 

export interface userPassDayLocksINTERFACE {
    id: number | null,      // just for sending object through graphQL if you first have user_id & day_id the flexible way. 
    user_id: number,        // user_id & day_id are NON-NULLABLE.
    day_id: number,
}

export interface cookieTokenINTERFACE {
    id: number,
    username: string,
    token: string
}

export type UserArray = userINTERFACE[];        // let users:UserArray = props.users

// was originally the witsFieldsConfirmationMessageINTERFACE
// usage:       msg: ''             toggle the message string back to empty if (STATE.msg === '') <ComponentWithoutMessage>
export interface messageINTERFACE {
    msg: string,
    error: boolean
}

export interface doWeFollowEachOther {
    iFollowThem: boolean;
    theyFollowMe: boolean;
}

export interface doWeBlockEachOther {
    iBlockThem: boolean;
    theyBlockMe: boolean;
}

//      green thumbs up | red thumbs down type of yes no message below. 
export interface iconOnlyMessageINTERFACE { error: boolean };

export interface childCommentsINTERFACE {
    parentThought: thoughtsINTERFACE,
    indentIndex: number
} 
