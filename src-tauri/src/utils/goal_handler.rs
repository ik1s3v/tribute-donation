use entity::goal::GoalType;

use crate::{
    enums::AppEvent,
    repositories::GoalsRepository,
    services::{DatabaseService, EventMessage, WebSocketBroadcaster},
};

pub async fn goal_handler(
    database_service: &DatabaseService,
    websocket_broadcaster: &WebSocketBroadcaster,
    amount: u32,
    r#type: GoalType,
) -> Result<(), String> {
    database_service
        .update_goal_amount(amount, r#type.clone())
        .await?;
    match database_service.get_not_ended_goal(r#type).await {
        Ok(goal) => {
            let event_message = EventMessage {
                event: AppEvent::Goal,
                data: goal,
            };
            websocket_broadcaster
                .broadcast_event_message(&event_message)
                .await;
        }
        _ => {}
    }
    Ok(())
}
